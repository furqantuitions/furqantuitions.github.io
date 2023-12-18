function showImage(type) {
    var contentDiv = document.getElementById('content');
    if (type === 'homework') {
        contentDiv.innerHTML = '<img src="essay.jpg" alt="Homework Image">';
    }
}

function showContent(type, file) {
    var contentDiv = document.getElementById('content');

    // Check if the type is 'test'
    if (type === 'test') {
        // Prompt the user for a password
        var password = prompt('Enter the password:');

        // Check if the password is correct
        if (password !== null && password.trim() === 'nocheating') {
            // Browser detection
            var isFirefox = typeof InstallTrigger !== 'undefined';

            // Display the PDF using iframe or embed based on the browser
            if (isFirefox) {
                // For Firefox, use iframe
                contentDiv.innerHTML = '<iframe src="' + file + '" width="100%" height="600px"></iframe>';
            } else {
                // For other browsers, use embed
                contentDiv.innerHTML = '<embed src="' + file + '" type="application/pdf" width="100%" height="600px"></embed>';
            }
        } else {
            // Clear the content if the password is incorrect or canceled
            contentDiv.innerHTML = '';
            alert('Incorrect password or operation canceled. Access denied.');
        }
    }
}
function showPracticescores() {
    var contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '<table border="1">' +
        '<tr><th>Test</th><th>Mark</th></tr>' +
        '<tr><td><a href="#" onclick="showContent(\'test\', \'test1.pdf\')">Test 1</a></td><td>85%</td></tr>' +
        '<tr><td>Test 2</td><td>90%</td></tr>' +
        '<tr><td>Test 3</td><td>93%</td></tr>' +
        '<tr><td>Test 4</td><td>73%</td></tr>' +
        '<tr><td>Test 5</td><td>84%</td></tr>' +
        '<tr><td>Test 6</td><td>87%</td></tr>' +
        '<tr><td>Test 7</td><td>60%</td></tr>' +
        '<tr><td>Test 8</td><td>94%</td></tr>' +
        '<tr><td>Test 9</td><td>94%</td></tr>' +
        '<tr><td>Test 10</td><td>NA%</td></tr>' +
        '<tr><td>Test 11</td><td>NA%</td></tr>' +
        '<tr><td>Test 12</td><td>100%</td></tr>' +
        '<tr><td>Test 13</td><td>NA%</td></tr>' +
        '<tr><td>Test 14</td><td>97%</td></tr>' +
        '<tr><td>Test 15</td><td>99%</td></tr>' +
        '<tr><td>Test 16</td><td>80%</td></tr>' +
        '<tr><td>Test 17</td><td>N/A</td></tr>' +
        '<tr><td>Test 18</td><td>N/A</td></tr>' +
        '<tr><td>Test 19</td><td>N/A</td></tr>' +
        '<tr><td>Test 20</td><td>N/A</td></tr>' +
        '</table>';
}
        function showtestscores() {
            var contentDiv = document.getElementById('content');
            contentDiv.innerHTML = '<table border="1">' +
                '<tr><th>Test</th><th>Mark</th></tr>' +
                '<tr><td>Test 1</td><td>75%</td></tr>' +
                '<tr><td>Test 2</td><td>84%</td></tr>' +
                '<tr><td>Test 3</td><td>95%</td></tr>' +
                '<tr><td>Test 4</td><td>88%</td></tr>' +
                '<tr><td>Test 5</td><td>N/A</td></tr>' +
                '<tr><td>Test 6</td><td>N/A</td></tr>' +
                '<tr><td>Test 7</td><td>N/A</td></tr>' +
                '<tr><td>Test 8</td><td>N/A</td></tr>' +
                '<tr><td>Test 9</td><td>N/A</td></tr>' +
                '<tr><td>Test 10</td><td>N/A</td></tr>' +
                '</table>';
}
document.addEventListener('DOMContentLoaded', function() {
  const vocabulary = {
    "Serendipity": "Finding something good without actually looking for it.",
    "Ephemeral": "Lasting for a very short time.",
    "Ubiquitous": "Present, appearing, or found everywhere.",
    "Obfuscate": "To deliberately make something unclear or difficult to understand.",
    "Mellifluous": "Sweet or musical; pleasant to hear.",
    "Sycophant": "A person who acts obsequiously towards someone important in order to gain advantage.",
    "Pernicious": "Having a harmful effect, especially in a gradual or subtle way.",
    "Benevolent": "Well-meaning and kindly.",
    "Quixotic": "Exceedingly idealistic; unrealistic and impractical.",
    "Esoteric": "Intended for or likely to be understood by only a small number of people with special knowledge.",
    "Nefarious": "Wicked, villainous, or criminal.",
    "Languid": "Lacking in vigor or vitality; slack or slow.",
    "Labyrinthine": "Complicated and confusing, like a labyrinth.",
    "Capitulate": "To cease to resist an opponent or an unwelcome demand; surrender.",
    "Ineffable": "Too great or extreme to be expressed or described in words.",
    "Nascent": "Just coming into existence and beginning to display signs of future potential.",
    "Querulous": "Complaining in a whining manner.",
    "Nebulous": "In the form of a cloud or haze; hazy.",
    "Ebullient": "Cheerful and full of energy.",
    "Disparate": "Essentially different in kind; not allowing comparison.",
    "Voracious": "Wanting or devouring great quantities of food; having a very eager approach to a particular activity.",
    "Pernicious": "Having a harmful effect, especially in a gradual or subtle way.",
    "Sycophant": "A person who acts obsequiously towards someone important in order to gain advantage.",
    "Ephemeral": "Lasting for a very short time.",
    "Languid": "Lacking in vigor or vitality; slack or slow.",
    "Pernicious": "Having a harmful effect, especially in a gradual or subtle way.",
    "Labyrinthine": "Complicated and confusing, like a labyrinth.",
    "Capitulate": "To cease to resist an opponent or an unwelcome demand; surrender.",
    "Ineffable": "Too great or extreme to be expressed or described in words.",
    "Nascent": "Just coming into existence and beginning to display signs of future potential.",
    "Querulous": "Complaining in a whining manner.",
    "Nebulous": "In the form of a cloud or haze; hazy.",
    "Ebullient": "Cheerful and full of energy.",
    // Additional words and meanings
    "Ephemeral": "Lasting for a very short time.",
    "Mellifluous": "Flowing sweetly or smoothly.",
    "Cacophony": "A harsh, discordant mixture of sounds.",
    "Surreptitious": "Kept secret, especially because it would not be approved of.",
    "Parsimonious": "Unwilling to spend money or use resources; stingy or frugal.",
    "Quixotic": "Exceedingly idealistic; unrealistic and impractical.",
    "Cacophony": "A harsh, discordant mixture of sounds.",
    "Sycophant": "A person who acts obsequiously towards someone important in order to gain advantage.",
    "Ephemeral": "Lasting for a very short time.",
    "Languid": "Lacking in vigor or vitality; slack or slow.",
    "Ineffable": "Too great or extreme to be expressed or described in words.",
    "Nebulous": "In the form of a cloud or haze; hazy.",
    "Ebullient": "Cheerful and full of energy.",
  };

  const randomWord = Object.entries(vocabulary)[Math.floor(Math.random() * Object.keys(vocabulary).length)];

  // Create a custom notification element
  const notificationElement = document.createElement('div');
  notificationElement.id = 'notification';
  notificationElement.innerHTML = `<h2>${randomWord[0]}</h2><p>${randomWord[1]}</p>`;

  // Append the notification to the body
  document.body.appendChild(notificationElement);
});
