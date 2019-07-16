const stripe = require('stripe')('sk_test_H89aia9P4wOOT6iKAfxt1rbL00IR7FjtW6')

exports.handler = async function(event) {
    const {
        tokenId,
        email,
        name,
        description,
        amount
    } = JSON.parse(event.body)

    const customer = await stripe.customers.create({
        description: email,
        source: tokenId
    })

    await stripe.charge.create({
        customer: customer.id,
        amount,
        name,
        description,
        curency: 'usd',
    })
}