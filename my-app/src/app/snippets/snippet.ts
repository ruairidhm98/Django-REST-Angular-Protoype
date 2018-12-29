let nextId = 10;

export class Snippet {
  code: string;
  title: string;
  linenos: boolean;
  language: string;
  style: string;
  id: number;

  constructor(code: string, title: string, linenos: boolean, language: string, style: string) {
    /* Array of some possible languages */
    const languages = ['python', 'typescript', 'java', 'C', 'C++', 'haskell'];
    this.code = code;
    this.title = title;
    this.linenos = linenos;
    /* In the rest api, it has to be a specific lanugage, so just making sure */
    if (languages.includes(language.toLowerCase())) {
      this.language = language;
    } else {
      this.language = 'python';
    }
    /* Just to avoid them 400's */
    if (style !== 'friendly') {
      this.style = 'friendly';
    }
    this.id = nextId++;
  }

}

