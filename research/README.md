# Keyword research

`kwp.csv` holds the Google Keyword Planner export, trimmed to four columns:

| column | KWP column |
|---|---|
| keyword | Keyword |
| avg_monthly_searches | Avg. monthly searches |
| cpc_low | Top of page bid (low range) |
| cpc_high | Top of page bid (high range) |

KWP settings: location Paraguay, language Spanish, last 12 months.
Drop rows with fewer than 10 average monthly searches. Keep up to ~500 rows.
