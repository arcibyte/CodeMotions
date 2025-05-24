import * as assert from 'assert';
import { EmotionEngine } from '../EmotionEngine';

suite('EmotionEngine Tests', () => {
    test('should detect frustration', () => {
        const fakeDoc = { getText: () => 'cosnole.log()' } as any;
        const emotion = EmotionEngine.analyzeDocument(fakeDoc);
        assert.strictEqual(emotion, 'frustración');
    });

    test('should detect sadness', () => {
        const fakeDoc = { getText: () => '// esto no sirve' } as any;
        const emotion = EmotionEngine.analyzeDocument(fakeDoc);
        assert.strictEqual(emotion, 'tristeza');
    });

    test('should return neutral', () => {
        const fakeDoc = { getText: () => 'function saludo() {}' } as any;
        const emotion = EmotionEngine.analyzeDocument(fakeDoc);
        assert.strictEqual(emotion, 'neutral');
    });
});
