var fs = require('fs');


async function start() {
  let file = await fs.readFileSync('node_modules/react-native-lightbox/LightboxOverlay.js');
  if (!(/supportedOrientations/gi).test(file)) {
    file = file.toString().replace('Modal visible', 'Modal supportedOrientations={[\'landscape\']} visible');
    await fs.writeFileSync('node_modules/react-native-lightbox/LightboxOverlay.js', file);
    console.log('write lightbox');
  }
}

start();
