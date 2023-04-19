const btn = document.querySelector('#new-quote');

const quote = document.querySelector('.quote');

const person = document.querySelector('.person');

const quotes = [
    {
        quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
        person: `Nelson Mandela`
    },
    {
        quote: `"The way to get started is to quit talking and begin doing."`,
        person: `Walt Disney`
    },
    {
        quote: `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."`,
        person: `Steve Jobs`
    },
    {
        quote: `"If life were predictable it would cease to be life, and be without flavor."`,
        person: `Eleanor Roosevelt`
    },
    {
        quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
        person: `Oprah Winfrey`
    },
    {
        quote: `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."`,
        person: `James Cameron`
    },
    {
        quote: `"Life is what happens when you're busy making other plans."`,
        person: `John Lennon`
    },
    {
        quote: `"Don't judge each day by the harvest you reap but by the seeds that you plant."`,
        person: `Robert Louis Stevenson`
    },
    {
        quote: `"The future belongs to those who believe in the beauty of their dreams."`,
        person: `Eleanor Roosevelt`
    },
    {
        quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
        person: `Benjamin Franklin`
    },
    {
        quote: `"The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart."`,
        person: `Helen Keller`
    },
    {
        quote: `"It is during our darkest moments that we must focus to see the light."`,
        person: `Aristotle`
    },
    {
        quote: `"Whoever is happy will make others happy too."`,
        person: `Anne Frank`
    },
    {
        quote: `"Do not go where the path may lead, go instead where there is no path and leave a trail."`,
        person: `Ralph Waldo Emerson`
    },
    {
        quote: `"You will face many defeats in life, but never let yourself be defeated."`,
        person: `Maya Angelou`
    },
    {
        quote: `"Life is never fair, and perhaps it is a good thing for most of us that it is not."`,
        person: `Oscar Wilde`
    },
    {
        quote: `"Never let the fear of striking out keep you from playing the game."`,
        person: `Babe Ruth`
    },
    {
        quote: `"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."`,
        person: `Dr. Seuss`
    },

]

btn.addEventListener('click', ()=>{
    let rand = Math.floor(Math.random()*(quotes.length));
    quote.textContent = quotes[rand].quote;
    person.textContent = quotes[rand].person;
})