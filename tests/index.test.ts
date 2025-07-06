import { describe, it, expect, vi } from 'vitest';
import { createLogger } from '../src';

describe('styled-tlog logger output', () => {
  it('logs with correct ANSI codes for red and bold', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});

    const logger = createLogger({
      error: { color: 'red', bold: true }
    });

    logger.error('Test message');

    expect(spy).toHaveBeenCalledWith('\x1b[31m\x1b[1mTest message\x1b[0m');

    spy.mockRestore();
  });

  it('logs with background and underline styles', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {});

    const logger = createLogger({
      fancy: { color: 'cyan', background: 'magenta', underline: true }
    });

    logger.fancy('Styled message');

    expect(spy).toHaveBeenCalledWith('\x1b[36m\x1b[45m\x1b[4mStyled message\x1b[0m');

    spy.mockRestore();
  });
});
