export type LogColor =
  | "black" | "red" | "green" | "yellow"
  | "blue" | "magenta" | "cyan" | "white";

export interface LogStyle {
  color?: LogColor;
  background?: LogColor;
  bold?: boolean;
  underline?: boolean;
}

export type LoggerConfig = {
  [key: string]: LogStyle;
};

const fgMap: Record<LogColor, string> = {
  black: '30', red: '31', green: '32', yellow: '33',
  blue: '34', magenta: '35', cyan: '36', white: '37'
};

const bgMap: Record<LogColor, string> = {
  black: '40', red: '41', green: '42', yellow: '43',
  blue: '44', magenta: '45', cyan: '46', white: '47'
};

export function createLogger(config: LoggerConfig) {
  const logger: Record<string, (msg: string) => void> = {};

  for (const key in config) {
    const style = config[key];
    let prefix = "";

    if (style.color) prefix += `\x1b[${fgMap[style.color]}m`;
    if (style.background) prefix += `\x1b[${bgMap[style.background]}m`;
    if (style.bold) prefix += `\x1b[1m`;
    if (style.underline) prefix += `\x1b[4m`;

    const reset = "\x1b[0m";

    logger[key] = (msg: string) => {
      console.log(`${prefix}${msg}${reset}`);
    };
  }

  return logger;
}
