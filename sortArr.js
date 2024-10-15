let arr = [
    {
        brand: 'Huyndai',
        model: 'Santafe'
    }, {
        brand: 'Huyndai',
        model: 'Sonata'
    }, {
        brand: 'Vinfast',
        model: 'Lux SA'
    }, {
        brand: 'Toyota',
        model: 'Camry'
    }, {
        brand: 'Vinfast',
        model: 'Lux A'
    }, {
        brand: 'Toyota',
        model: 'Vios'
    }
];
let result = Array.from(new Set(arr.map(item => item.brand)), brand => {
    return arr.filter(item => item.brand === brand);
  });
  
  console.log(result);