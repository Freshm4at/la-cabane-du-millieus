export default function importAll(r) {
    let images = {};
    let size = 0
    r.keys().map((item, index) => { 
      images[item.replace('./', '')] = r(item); 
      size = size +1
    });
    return [images,size];
  }