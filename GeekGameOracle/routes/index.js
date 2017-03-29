function loadXMLDoc(filePath) {
    var fs = require('fs');
    var json;
    var xml2js = require('xml2js');
    try {
        var fileData = fs.readFileSync(filePath, 'ascii');
        console.log("File contents:");
        console.log(fileData);
        var parser = new xml2js.Parser();
        parser.parseString(fileData.substring(0, fileData.length), function (err, result) {
            try {
                console.log('Parsing XML...');
                json = JSON.stringify(result);
                console.log('Resulting json:');
                console.log(json);                
            } catch (exx) {
                console.log('error parsing:' + exx.toString());
            }
        });
        
        console.log("File '" + filePath + "/ was successfully read.\n");
    } catch (ex) { console.log(ex) }
    return json;

}

exports.index = function (req, res) {
    var XMLPath = "./XMLData/OracleData.xml";
    var rawJSON = loadXMLDoc(XMLPath);
    res.render('index', { title: 'Geek Game Oracle', data: rawJSON });
};

