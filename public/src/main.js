$(()=>{
  console.log('script loaded.')

  const sendToDB = (favstock) => {
    console.log(`Saving ${stock.name} to the DB`)
    $.ajax({
      url: '/',
      type: 'POST',
      data: stock
    }).done((data) => {
      console.log(data)
      window.location = `http://localhost:3002/stock/${data.id}`
    })
  }
//not sure what number to use where a ? is in code
  $('button').click(()=>{
    console.log('requesting a random stock from stockAPI')
    const rand = Math.floor(Math.random()*?)+1

    $.ajax({
      url: `/${rand}`,
      type: 'GET',
      success: (data) => {
        const stock = {
          symbol: data.symbol,
          companyName: data.companyName,
          sector: data.sector,
          currentPrice: data.currentPrice,
          openPrice: data.openPrice,

        }
        sendToDB(favstock)
        console.log(favstock)
      }

    })
  })
})
