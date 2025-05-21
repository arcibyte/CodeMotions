import * as vscode from 'vscode';
import { EmotionEngine } from './EmotionEngine';

export function activate(context: vscode.ExtensionContext) {
  vscode.workspace.onDidChangeTextDocument(event => {
    const emotion = EmotionEngine.analyzeDocument(event.document);

    if (emotion === 'frustración') {
      vscode.window.showInformationMessage('😤 ¡Respira! Los errores son parte del viaje.');
    } else if (emotion === 'tristeza') {
      vscode.window.showInformationMessage('💙 Todo va a estar bien. Tómate un momento.');
    }
  });
}

export function deactivate() {}
