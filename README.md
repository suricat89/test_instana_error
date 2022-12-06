## Test instana error

This app was created to help troubleshoot the `elasticsearch` legacy lib instrumentation error using `@instana/collector`.


## Environment

- Node.js 12
- `elasticsearch@12.1.0`
- `@instana/collector@2.12.0`

## Instalation

```bash
nvm use 12
npm install
```

## How to run

It could be executed using the terminal
```bash
# Default Instana lib initialization
npm run instanaEnabled

# Initialize Instana lib with INSTANA_DISABLED_TRACERS='elasticsearchLegacy'
npm run instanaEnabledWithDisabledTrace

# Run the app without Instana lib
npm run instanaDisabled
```

It can also be executed with VSCode Debug for better experience (launch tasks names similar to the above ones)

## App behavior

### 1st scenario (default Instana initialization)
- **Expected behavior:** instrument Elasticsearch with `elasticsearch.Client.apis` array set
- **Actual behavior:** `elasticsearch.Client.apis` is `undefined`

### 2nd scenario (initialize Instana with disabled tracers)
- **Expected behavior:** don't instrument Elasticsearch and keep `elasticsearch.Client.apis` array set
- **Actual behavior:** Elasticsearch still being instrumented and `elasticsearch.Client.apis` is `undefined`

### 3rd scenario (don't initialize Instana)
- **Expected behavior:** don't instrument Elasticsearch and `elasticsearch.Client.apis` array set
- **Actual behavior:** as expected