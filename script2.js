function showImage(type) {
    var contentDiv = document.getElementById('content');
    if (type === 'homework') {
        contentDiv.innerHTML = '<img src="essay.jpg" alt="Homework Image">';
    } else if (type === 'test') {
        contentDiv.innerHTML = '<img src="zoyatest.jpg" alt="Test Image">';
    }
}

function showMarks() {
    var contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '<table border="1">' +
'<tr><th>Test</th><th>Mark</th></tr>' +
            '<tr><td>Test 1</td><td>85%</td></tr>' +
            '<tr><td>Test 2</td><td>75%</td></tr>' +
            '<tr><td>Test 3</td><td>93%</td></tr>' +
            '<tr><td>Test 4</td><td>73%</td></tr>' +
            '<tr><td>Test 5</td><td>84%</td></tr>' +
            '<tr><td>Test 6</td><td>87%</td></tr>' +
            '<tr><td>Test 7</td><td>60%</td></tr>' +
            '<tr><td>Test 8</td><td>94%</td></tr>' +
            '<tr><td>Test 9</td><td>94%</td></tr>' +
            '<tr><td>Test 10</td><td>88%</td></tr>' +
            '<tr><td>Test 11</td><td>95%</td></tr>' +
                '<tr><td>Test 12</td><td>100%</td></tr>' +
                '<tr><td>Test 13</td><td>84%</td></tr>' +
                '<tr><td>Test 14</td><td>97%</td></tr>' +
                '<tr><td>Test 15</td><td>99%</td></tr>' +
                '<tr><td>Test 16</td><td>80%</td></tr>' +
                '<tr><td>Test 17</td><td>96%</td></tr>' +
                '<tr><td>Test 18</td><td>99%</td></tr>' +
                '<tr><td>Test 19</td><td>N/A</td></tr>' +
                '<tr><td>Test 20</td><td>N/A</td></tr>' +
        '</table>';
}
