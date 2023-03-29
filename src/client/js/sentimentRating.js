function sentimentRating(score_tag) {
    switch(score_tag) {
        case 'P+':
            return 'Strong positive';
        case 'P':
            return 'Positive'
        case 'NEU':
            return 'Neutral'
        case 'N':
            return 'Negative'
        case 'N+':
            return 'Strong negative'
        case 'NONE':
            return 'Without polarity'
        default:
            return 'Something went wrong'
    } 

}

export { sentimentRating }
