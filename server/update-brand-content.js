const pool = require('./db');

function rewriteContent(content) {
  const isString = typeof content === 'string';
  let str = isString ? content : JSON.stringify(content);

  // Replace possessive forms first
  str = str.replace(/Orange\s+Office\s+Technologies(?:\s+Pvt\s+Ltd)?['’]s?/gi, "Shipsoft Solutions Pvt Ltd's");

  // Replace formal name with Pvt Ltd
  str = str.replace(/Orange\s+Office\s+Technologies\s+Pvt\s+Ltd\.?/gi, "Shipsoft Solutions Pvt Ltd.");
  str = str.replace(/Orange\s+Office\s+Technologies\s+Pvt\s+Ltd/gi, "Shipsoft Solutions Pvt Ltd");

  // Replace remaining instances
  str = str.replace(/Orange\s+Office\s+Technologies/gi, "Shipsoft Solutions Pvt Ltd");
  str = str.replace(/orange\s+office\s+technologies/gi, "Shipsoft Solutions Pvt Ltd");

  // Clean up any double periods caused by replacement
  str = str.replace(/Shipsoft Solutions Pvt Ltd\.\./g, "Shipsoft Solutions Pvt Ltd.");

  return isString ? str : JSON.parse(str);
}

async function run() {
  console.log('Connecting to database and updating brand name to Shipsoft Solutions Pvt Ltd...');
  const [rows] = await pool.query('SELECT section, content FROM site_content');
  let updatedCount = 0;

  for (const row of rows) {
    const origStr = typeof row.content === 'string' ? row.content : JSON.stringify(row.content);
    const updatedContent = rewriteContent(row.content);
    const updatedStr = typeof updatedContent === 'string' ? updatedContent : JSON.stringify(updatedContent);

    if (origStr !== updatedStr) {
      await pool.query('UPDATE site_content SET content = ? WHERE section = ?', [
        JSON.stringify(typeof updatedContent === 'string' ? JSON.parse(updatedContent) : updatedContent),
        row.section,
      ]);
      console.log(`✓ Updated section: "${row.section}"`);
      updatedCount++;
    }
  }

  console.log(`\nCompleted: ${updatedCount} sections updated in site_content table.`);
  await pool.end();
}

run().catch((err) => {
  console.error('Migration failed:', err.message);
  process.exit(1);
});
