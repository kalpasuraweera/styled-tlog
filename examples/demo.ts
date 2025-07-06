import { createLogger } from '../src/index.js';

console.log('🎨 styled-tlog Demo - Terminal Logger with Styling\n');

// Basic usage
console.log('1. Basic Usage:');
const basicLogger = createLogger({
  info: { color: 'blue' },
  error: { color: 'red' },
  success: { color: 'green' },
  warning: { color: 'yellow' }
});

basicLogger.info('This is an info message');
basicLogger.error('This is an error message');
basicLogger.success('This is a success message');
basicLogger.warning('This is a warning message');

console.log('\n2. All Available Colors:');
const colorLogger = createLogger({
  black: { color: 'black' },
  red: { color: 'red' },
  green: { color: 'green' },
  yellow: { color: 'yellow' },
  blue: { color: 'blue' },
  magenta: { color: 'magenta' },
  cyan: { color: 'cyan' },
  white: { color: 'white' }
});

colorLogger.black('Black text');
colorLogger.red('Red text');
colorLogger.green('Green text');
colorLogger.yellow('Yellow text');
colorLogger.blue('Blue text');
colorLogger.magenta('Magenta text');
colorLogger.cyan('Cyan text');
colorLogger.white('White text');

console.log('\n3. All Available Background Colors:');
const bgLogger = createLogger({
  blackBg: { background: 'black' },
  redBg: { background: 'red' },
  greenBg: { background: 'green' },
  yellowBg: { background: 'yellow' },
  blueBg: { background: 'blue' },
  magentaBg: { background: 'magenta' },
  cyanBg: { background: 'cyan' },
  whiteBg: { background: 'white' }
});

bgLogger.blackBg('Black background');
bgLogger.redBg('Red background');
bgLogger.greenBg('Green background');
bgLogger.yellowBg('Yellow background');
bgLogger.blueBg('Blue background');
bgLogger.magentaBg('Magenta background');
bgLogger.cyanBg('Cyan background');
bgLogger.whiteBg('White background');

console.log('\n4. Available Text Styles:');
const styleLogger = createLogger({
  bold: { bold: true },
  underline: { underline: true },
  normalText: {} // No styling
});

styleLogger.bold('Bold text');
styleLogger.underline('Underlined text');
styleLogger.normalText('Normal text (no styling)');

console.log('\n5. Combined Styles:');
const combinedLogger = createLogger({
  errorBold: { color: 'red', bold: true },
  successUnderline: { color: 'green', underline: true },
  warningBg: { color: 'yellow', background: 'black', bold: true },
  infoBoldUnderline: { color: 'blue', bold: true, underline: true },
  highlight: { color: 'white', background: 'magenta', bold: true },
  note: { color: 'cyan', background: 'blue', underline: true },
  allStyles: { color: 'white', background: 'red', bold: true, underline: true }
});

combinedLogger.errorBold('Bold red error');
combinedLogger.successUnderline('Underlined green success');
combinedLogger.warningBg('Yellow text on black background');
combinedLogger.infoBoldUnderline('Blue text with bold and underline');
combinedLogger.highlight('Highlighted important message');
combinedLogger.note('Important note with styling');
combinedLogger.allStyles('All styles combined!');

console.log('\n6. Real-world Usage Examples:');
const appLogger = createLogger({
  startup: { color: 'green', bold: true },
  shutdown: { color: 'red', bold: true },
  request: { color: 'blue' },
  response: { color: 'cyan' },
  debug: { color: 'white' },
  critical: { color: 'white', background: 'red', bold: true },
  performance: { color: 'yellow' },
  database: { color: 'magenta', underline: true }
});

appLogger.startup('🚀 Application started successfully');
appLogger.request('📥 Incoming request: GET /api/users');
appLogger.response('📤 Response sent: 200 OK');
appLogger.debug('🐛 Debug: Processing user data');
appLogger.performance('⚡ Performance: Query took 245ms');
appLogger.database('💾 Database: Connection established');
appLogger.critical('🚨 CRITICAL: Database connection lost');
appLogger.shutdown('🛑 Application shutting down');

console.log('\n7. Log Levels with Different Combinations:');
const levelLogger = createLogger({
  trace: { color: 'white' },
  debug: { color: 'blue' },
  info: { color: 'green' },
  warn: { color: 'yellow', bold: true },
  error: { color: 'red', bold: true },
  fatal: { color: 'white', background: 'red', bold: true, underline: true }
});

levelLogger.trace('[TRACE] Detailed trace information');
levelLogger.debug('[DEBUG] Debug information');
levelLogger.info('[INFO] General information');
levelLogger.warn('[WARN] Warning message');
levelLogger.error('[ERROR] Error occurred');
levelLogger.fatal('[FATAL] Fatal error - system crash');

console.log('\n8. Color Matrix Demo:');
const matrixLogger = createLogger({
  redOnBlack: { color: 'red', background: 'black' },
  greenOnBlack: { color: 'green', background: 'black' },
  yellowOnBlue: { color: 'yellow', background: 'blue' },
  whiteOnRed: { color: 'white', background: 'red' },
  blackOnWhite: { color: 'black', background: 'white' },
  cyanOnMagenta: { color: 'cyan', background: 'magenta' }
});

matrixLogger.redOnBlack('Red text on black background');
matrixLogger.greenOnBlack('Green text on black background');
matrixLogger.yellowOnBlue('Yellow text on blue background');
matrixLogger.whiteOnRed('White text on red background');
matrixLogger.blackOnWhite('Black text on white background');
matrixLogger.cyanOnMagenta('Cyan text on magenta background');