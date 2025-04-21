const sourceSelect = document.getElementById('source-select');
const clickhouseConfig = document.getElementById('clickhouse-config');
const flatfileConfig = document.getElementById('flatfile-config');
const status = document.getElementById('status');
const result = document.getElementById('result');

sourceSelect.addEventListener('change', () => {
  const selected = sourceSelect.value;
  clickhouseConfig.classList.toggle('hidden', selected !== 'clickhouse');
  flatfileConfig.classList.toggle('hidden', selected !== 'flatfile');
});

function connect() {
  status.textContent = "Status: Connecting...";
  // Connect logic here (send values to backend via fetch or axios)
  setTimeout(() => {
    status.textContent = "Status: Connected!";
  }, 1000);
}

function loadColumns() {
  status.textContent = "Status: Loading columns...";
  // Simulated column loading
  setTimeout(() => {
    document.getElementById('columns-container').innerHTML = `
      <h4>Select Columns</h4>
      <label><input type="checkbox" checked> column1</label><br>
      <label><input type="checkbox"> column2</label><br>
      <label><input type="checkbox"> column3</label>
    `;
    status.textContent = "Status: Columns loaded.";
  }, 1000);
}

function previewData() {
  status.textContent = "Status: Previewing data...";
  // Simulate data preview
  setTimeout(() => {
    result.innerHTML = "<pre>column1, column2, column3\nval1, val2, val3</pre>";
    status.textContent = "Status: Preview ready.";
  }, 1000);
}

function startIngestion() {
  status.textContent = "Status: Ingestion started...";
  // Simulated ingestion
  setTimeout(() => {
    result.innerHTML = "Ingestion complete. 150 records processed.";
    status.textContent = "Status: Ingestion completed.";
  }, 2000);
}
