interface Options {
  unformatted: string[];
  indent_inner_html: boolean;
  indent_char: string;
  indent_size: number;
  sep: string;
  ocd?: boolean;
  newlines?: string;
}
declare const pretty: (str: string, options?: Partial<Options>) => string;
export default pretty;
