const FIREBASE_DOMAIN = 'https://joy-bakery-default-rtdb.firebaseio.com';

export async function getAllCakes() {
  const response = await fetch(`${FIREBASE_DOMAIN}/products/cakes.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch cakes.');
  }

  const transformedCakes = [];

  for (const key in data) {
    const cakeObj = {
      id: key,
      ...data[key],
    };

    transformedCakes.push(cakeObj);
  }

  return transformedCakes;
}

export async function getSingleCake(cakeId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/products/cakes/${cakeId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch cake.');
  }

  const loadedCake = {
    id: cakeId,
    ...data,
  };

  return loadedCake;
}


export async function getAllBakedGoods() {
  const response = await fetch(`${FIREBASE_DOMAIN}/products/baked_goods.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch cakes.');
  }

  const transformedBakedGoods = [];

  for (const key in data) {
    const bakedGoodObj = {
      id: key,
      ...data[key],
    };

    transformedBakedGoods.push(bakedGoodObj);
  }

  return transformedBakedGoods;
}

export async function getSingleBakedGood(bakedGoodId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/products/baked_goods/${bakedGoodId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch the product.');
  }

  const loadedBakedGood = {
    id: bakedGoodId,
    ...data,
  };

  return loadedBakedGood;
}

export async function submitOrder(orderData){
  const response=await fetch(`${FIREBASE_DOMAIN}/orders.json`,{
    method:'POST',
    body:JSON.stringify(orderData),
    headers:{
      'Content-type':'application/json'
    },
  });

  const data=await response.json();
  if(!response.ok){
    throw new Error(data.message || 'Failed to send your order!')
  }

}