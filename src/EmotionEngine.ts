import * as vscode from 'vscode';

export class EmotionEngine {
    private static errorPatterns = [
        /cosnole\.log\(\)/,
        /conso?le\.log\(\)/
    ];

    private static negativeComments = [
        /esto no sirve/,
        /qué porquería/,
        /error fatal/,
        /estoy tan perdido/,
    ];

    // Función que analiza el código y detecta emociones
    public static analyzeDocument(doc: vscode.TextDocument): string {
        let text = doc.getText();
        
        if (this.detectErrors(text)) {
            return 'frustración';
        }
        
        if (this.detectNegativeComments(text)) {
            return 'tristeza';
        }

        return 'neutral';
    }

    private static detectErrors(text: string): boolean {
        return this.errorPatterns.some(pattern => pattern.test(text));
    }

    private static detectNegativeComments(text: string): boolean {
        return this.negativeComments.some(pattern => pattern.test(text));
    }
}
