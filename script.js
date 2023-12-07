function showImage(type) {
    var contentDiv = document.getElementById('content');
    if (type === 'homework') {
        contentDiv.innerHTML = '<img src="essay.jpg" alt="Homework Image">';
    } else if (type === 'test') {
        contentDiv.innerHTML = '<img src="zayantest.jpg" alt="Test Image">';
    }
}

function showMarks() {
    var contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '<table border="1">' +
        '<tr><th>Test</th><th>Mark</th></tr>' +
        '<tr><td>Test 1</td><td>70%</td></tr>' +
        '<tr><td>Test 2</td><td>83%</td></tr>' +
        '<tr><td>Test 3</td><td>90%</td></tr>' +
        '<tr><td>Test 4</td><td>89%</td></tr>' +
        '<tr><td>Test 5</td><td>100%</td></tr>' +
        '<tr><td>Test 6</td><td>90%</td></tr>' +
        '<tr><td>Test 7</td><td>80%</td></tr>' +
        '<tr><td>Test 8</td><td>100%</td></tr>' +
        '<tr><td>Test 9</td><td>94%</td></tr>' +
        '<tr><td>Test 10</td><td>85%</td></tr>' +
        '<tr><td>Test 11</td><td>88%</td></tr>' +
        '<tr><td>Test 12</td><td>70%</td></tr>' +
        '<tr><td>Test 13</td><td>94%</td></tr>' +
        '<tr><td>Test 14</td><td>60%</td></tr>' +
        '<tr><td>Test 15</td><td>95%</td></tr>' +
        '<tr><td>Test 16</td><td>94%</td></tr>' +
        '<tr><td>Test 17</td><td>N/A</td></tr>' +
        '<tr><td>Test 18</td><td>N/A</td></tr>' +
        '<tr><td>Test 19</td><td>N/A</td></tr>' +
        '<tr><td>Test 20</td><td>N/A</td></tr>' +
        '</table>';
}