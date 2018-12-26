
export class Snippet {
    
    code: string;
    id: number;
    language: string;
    linenos: boolean;
    owner: string;
    style: string;
    title: string;

    setCode(code: string) : void { this.code = code; }

    setId(id: number): void { this.id = id; }

    setLanguage(language: string): void { this.language = language; }
    
    setLinenos(linenos: boolean): void { this.linenos= linenos; }
    
    setOwner(owner: string): void { this.owner = owner; }
    
    setStyle(style: string): void { this.style = style; }
    
    setTitle(code: string): void { this.code = code; }



}   