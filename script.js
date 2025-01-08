
function generatePoem() {
    const poemType = document.getElementById('poem-type').value;
    const output = document.getElementById('poem-output');
    
    const poems = {
        haiku: [
            "Autumn leaves falling\nDancing in the gentle breeze\nNature's lullaby",
            "Morning sun rises\nDewdrops sparkle on grass blades\nNew day awakens",
            "Ocean waves crash soft\nSeagulls soar in salty air\nPeace washes over"
        ],
        sonnet: [
            "When summer days drift softly into night,\nAnd stars begin their dance across the sky,\nThe world transforms in gentle silver light,\nAs nature's beauty makes the heart reply.",
            "Through winter's frost and autumn's golden hue,\nThe seasons paint their stories in the air,\nEach moment brings a wonder fresh and new,\nA gift of life beyond compare."
        ],
        "free-verse": [
            "In the quiet moments\nBetween heartbeats\nWhere silence speaks\nAnd dreams take flight\nI find myself\nWhole again",
            "Mountains whisper\nSecrets to the clouds\nWhile rivers carry\nStories to the sea"
        ],
        limerick: [
            "There once was a cat from Nantucket\nWho carried his food in a bucket\nHe'd walk with such grace\nNot spilling a trace\nAnd if anyone saw, he'd just chuck it!",
            "A painter who lived in Milan\nHad quite an unusual plan\nHe'd paint with his toes\nWhile striking a pose\nAnd that's how his fame began!"
        ],
        surprise: [
            "There once was a cat from Nantucket\nWho carried his food in a bucket\nHe'd walk with such grace\nNot spilling a trace\nAnd if anyone saw, he'd just chuck it!Why don't they play poker in the jungle? Too many cheetahs!",
            "Why don't scientists trust atoms? Because they make up everything!"
    ]
    };

    const randomPoem = poems[poemType][Math.floor(Math.random() * poems[poemType].length)];
    output.textContent = randomPoem;
}