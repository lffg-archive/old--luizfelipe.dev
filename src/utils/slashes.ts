export function trimSlashes(str: string) {
  return str.replace(/^\/+|\/+$/g, '');
}

export interface EnsureSlashesOptions {
  start?: boolean;
  end?: boolean;
}

export function ensureSlashes(str: string, options: EnsureSlashesOptions = {}) {
  const mergedOptions: EnsureSlashesOptions = {
    start: true,
    end: true,
    ...options
  };

  const start = mergedOptions.start ? '/' : '';
  const end = mergedOptions.end ? '/' : '';

  return start + trimSlashes(str) + end;
}
