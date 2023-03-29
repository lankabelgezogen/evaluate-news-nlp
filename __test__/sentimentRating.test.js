import { sentimentRating } from "../src/client/js/sentimentRating";

describe("Sentiment Rating", () => {
    test('Strong positive sentiment rating', () => {
        expect(sentimentRating('P+')).toBe('Strong positive')
    })
    
    test('Positive sentiment rating', () => {
        expect(sentimentRating('P')).toBe('Positive')
    })
    
    test('Neutral sentiment rating', () => {
        expect(sentimentRating('NEU')).toBe('Neutral')
    })
    
    test('Negative sentiment rating', () => {
        expect(sentimentRating('N')).toBe('Negative')
    })
    
    test('Very negative sentiment rating', () => {
        expect(sentimentRating('N+')).toBe('Strong negative')
    })
    
    test('No sentiment rating', () => {
        expect(sentimentRating('NONE')).toBe('Without polarity')
    })
})

