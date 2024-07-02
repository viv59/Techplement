import express from "express"

// const express = require('express');
const app = express();
const port = 5000;

const quotes = [
    {"author": "Mahatma Gandhi", "quote": "Be the change that you wish to see in the world."},
    {"author": "Rabindranath Tagore", "quote": "You can't cross the sea merely by standing and staring at the water."},
    {"author": "Swami Vivekananda", "quote": "Arise, awake, and stop not till the goal is reached."},
    {"author": "A.P.J. Abdul Kalam", "quote": "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action."},
    {"author": "S. Radhakrishnan", "quote": "When we think we know, we cease to learn."},
    {"author": "Jawaharlal Nehru", "quote": "Failure comes only when we forget our ideals and objectives and principles."},
    {"author": "Rabindranath Tagore", "quote": "Let your life lightly dance on the edges of Time like dew on the tip of a leaf."},
    {"author": "Swami Vivekananda", "quote": "Take risks in your life. If you win, you can lead. If you lose, you can guide."},
    {"author": "A.P.J. Abdul Kalam", "quote": "You have to dream before your dreams can come true."},
    {"author": "Mahatma Gandhi", "quote": "The best way to find yourself is to lose yourself in the service of others."},
    {"author": "S. Radhakrishnan", "quote": "Books are the means by which we build bridges between cultures."},
    {"author": "Jawaharlal Nehru", "quote": "Time is not measured by the passing of years but by what one does, what one feels, and what one achieves."},
    {"author": "Rabindranath Tagore", "quote": "Reach high, for stars lie hidden in you. Dream deep, for every dream precedes the goal."},
    {"author": "Swami Vivekananda", "quote": "The greatest sin is to think yourself weak."},
    {"author": "A.P.J. Abdul Kalam", "quote": "To succeed in your mission, you must have single-minded devotion to your goal."},
    {"author": "Mahatma Gandhi", "quote": "An eye for an eye only ends up making the whole world blind."},
    {"author": "S. Radhakrishnan", "quote": "True knowledge gives a moral standing and moral strength."},
    {"author": "Jawaharlal Nehru", "quote": "Culture is the widening of the mind and of the spirit."},
    {"author": "Rabindranath Tagore", "quote": "Let us not pray to be sheltered from dangers but to be fearless when facing them."},
    {"author": "Swami Vivekananda", "quote": "In a conflict between the heart and the brain, follow your heart."},
    {"author": "A.P.J. Abdul Kalam", "quote": "Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work."},
    {"author": "Mahatma Gandhi", "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever."},
    {"author": "S. Radhakrishnan", "quote": "Man is a paradoxical being—the constant glory and scandal of this world."},
    {"author": "Jawaharlal Nehru", "quote": "The policy of being too cautious is the greatest risk of all."},
    {"author": "Rabindranath Tagore", "quote": "Death is not extinguishing the light; it is only putting out the lamp because the dawn has come."},
    {"author": "Swami Vivekananda", "quote": "All power is within you; you can do anything and everything."},
    {"author": "A.P.J. Abdul Kalam", "quote": "Excellence is a continuous process and not an accident."},
    {"author": "Mahatma Gandhi", "quote": "The weak can never forgive. Forgiveness is the attribute of the strong."},
    {"author": "S. Radhakrishnan", "quote": "The true teachers are those who help us think for ourselves."},
    {"author": "Jawaharlal Nehru", "quote": "Ignorance is always afraid of change."},
    {"author": "Rabindranath Tagore", "quote": "The butterfly counts not months but moments, and has time enough."},
    {"author": "Swami Vivekananda", "quote": "Talk to yourself once in a day, otherwise you may miss meeting an excellent person in this world."},
    {"author": "A.P.J. Abdul Kalam", "quote": "To become 'unique,' the challenge is to fight the hardest battle which anyone can imagine until you reach your destination."},
    {"author": "Mahatma Gandhi", "quote": "The future depends on what you do today."},
    {"author": "S. Radhakrishnan", "quote": "The end-product of education should be a free creative man, who can battle against historical circumstances and adversities of nature."},
    {"author": "Jawaharlal Nehru", "quote": "The person who runs away exposes himself to that very danger more than a person who sits quietly."},
    {"author": "Rabindranath Tagore", "quote": "Faith is the bird that feels the light when the dawn is still dark."},
    {"author": "Swami Vivekananda", "quote": "You cannot believe in God until you believe in yourself."},
    {"author": "A.P.J. Abdul Kalam", "quote": "If you want to shine like a sun, first burn like a sun."},
    {"author": "Mahatma Gandhi", "quote": "Strength does not come from physical capacity. It comes from an indomitable will."},
    {"author": "S. Radhakrishnan", "quote": "Tolerance is the homage which the finite mind pays to the inexhaustibility of the infinite."},
    {"author": "Jawaharlal Nehru", "quote": "The art of a people is a true mirror to their minds."},
    {"author": "Rabindranath Tagore", "quote": "Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky."},
    {"author": "Swami Vivekananda", "quote": "The more we come out and do good to others, the more our hearts will be purified, and God will be in them."},
    {"author": "A.P.J. Abdul Kalam", "quote": "Let us sacrifice our today so that our children can have a better tomorrow."},
    {"author": "Mahatma Gandhi", "quote": "Happiness is when what you think, what you say, and what you do are in harmony."},
    {"author": "S. Radhakrishnan", "quote": "We are apt to think that our visions of the future are the realities of the present."},
    {"author": "Jawaharlal Nehru", "quote": "There is nothing more horrifying than stupidity in action."},
    {"author": "Rabindranath Tagore", "quote": "Everything comes to us that belongs to us if we create the capacity to receive it."},
    {"author": "Swami Vivekananda", "quote": "The world is the great gymnasium where we come to make ourselves strong."},
    {"author": "A.P.J. Abdul Kalam", "quote": "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck."},
    {"author": "Mahatma Gandhi", "quote": "In a gentle way, you can shake the world."},
    {"author": "S. Radhakrishnan", "quote": "Knowledge gives us power; love gives us the fullness."},
    {"author": "Jawaharlal Nehru", "quote": "Action to be effective must be directed to clearly conceived ends."},
    {"author": "Rabindranath Tagore", "quote": "Love does not claim possession, but gives freedom."},
    {"author": "Swami Vivekananda", "quote": "Do not wait for anybody or anything. Do whatever you can, build your hope on none."},
    {"author": "A.P.J. Abdul Kalam", "quote": "Man needs his difficulties because they are necessary to enjoy success."},
    {"author": "Mahatma Gandhi", "quote": "A man is but the product of his thoughts. What he thinks, he becomes."},
    {"author": "S. Radhakrishnan", "quote": "The world is one family."},
    {"author": "Jawaharlal Nehru", "quote": "Democracy is good. I say this because other systems are worse."},
    {"author": "Albert Einstein", "quote": "Life is like riding a bicycle. To keep your balance, you must keep moving."},
    {"author": "Nelson Mandela", "quote": "Education is the most powerful weapon which you can use to change the world."},
    {"author": "Winston Churchill", "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts."},
    {"author": "Abraham Lincoln", "quote": "In the end, it's not the years in your life that count. It's the life in your years."},
    {"author": "Martin Luther King Jr.", "quote": "I have decided to stick with love. Hate is too great a burden to bear."},
    {"author": "Mother Teresa", "quote": "Spread love everywhere you go. Let no one ever come to you without leaving happier."},
    {"author": "John F. Kennedy", "quote": "Ask not what your country can do for you – ask what you can do for your country."},
    {"author": "Franklin D. Roosevelt", "quote": "The only thing we have to fear is fear itself."},
    {"author": "Eleanor Roosevelt", "quote": "The future belongs to those who believe in the beauty of their dreams."},
    {"author": "Dalai Lama", "quote": "Be kind whenever possible. It is always possible."},
    {"author": "Nelson Mandela", "quote": "It always seems impossible until it's done."},
    {"author": "Maya Angelou", "quote": "You will face many defeats in life, but never let yourself be defeated."},
    {"author": "Steve Jobs", "quote": "Your time is limited, so don't waste it living someone else's life."},
    {"author": "Leonardo da Vinci", "quote": "Learning never exhausts the mind."},
    {"author": "Anne Frank", "quote": "How wonderful it is that nobody need wait a single moment before starting to improve the world."},
    {"author": "Confucius", "quote": "It does not matter how slowly you go as long as you do not stop."},
    {"author": "Mahatma Gandhi", "quote": "The best way to find yourself is to lose yourself in the service of others."},
    {"author": "Albert Einstein", "quote": "Try not to become a man of success, but rather try to become a man of value."},
    {"author": "Maya Angelou", "quote": "You will face many defeats in life, but never let yourself be defeated."},
    {"author": "Dalai Lama", "quote": "Be kind whenever possible. It is always possible."},
    {"author": "Confucius", "quote": "It does not matter how slowly you go as long as you do not stop."},
    {"author": "Steve Jobs", "quote": "Your time is limited, so don't waste it living someone else's life."},
    {"author": "Nelson Mandela", "quote": "It always seems impossible until it's done."},
    {"author": "Eleanor Roosevelt", "quote": "The future belongs to those who believe in the beauty of their dreams."},
    {"author": "Franklin D. Roosevelt", "quote": "The only thing we have to fear is fear itself."},
    {"author": "John F. Kennedy", "quote": "Ask not what your country can do for you – ask what you can do for your country."},
    {"author": "Mother Teresa", "quote": "Spread love everywhere you go. Let no one ever come to you without leaving happier."},
    {"author": "Martin Luther King Jr.", "quote": "I have decided to stick with love. Hate is too great a burden to bear."},
    {"author": "Abraham Lincoln", "quote": "In the end, it's not the years in your life that count. It's the life in your years."},
    {"author": "Winston Churchill", "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts."},
    {"author": "Nelson Mandela", "quote": "Education is the most powerful weapon which you can use to change the world."},
    {"author": "Albert Einstein", "quote": "Life is like riding a bicycle. To keep your balance, you must keep moving."},
    {"author": "Jawaharlal Nehru", "quote": "Democracy is good. I say this because other systems are worse."},
    {"author": "S. Radhakrishnan", "quote": "The world is one family."},
    {"author": "Mahatma Gandhi", "quote": "A man is but the product of his thoughts. What he thinks, he becomes."},
    {"author": "A.P.J. Abdul Kalam", "quote": "Man needs his difficulties because they are necessary to enjoy success."},
    {"author": "Swami Vivekananda", "quote": "Do not wait for anybody or anything. Do whatever you can, build your hope on none."},
    {"author": "Rabindranath Tagore", "quote": "Love does not claim possession, but gives freedom."},
    {"author": "Jawaharlal Nehru", "quote": "Action to be effective must be directed to clearly conceived ends."},
    {"author": "S. Radhakrishnan", "quote": "Knowledge gives us power; love gives us the fullness."},
    {"author": "Mahatma Gandhi", "quote": "In a gentle way, you can shake the world."},
    {"author": "A.P.J. Abdul Kalam", "quote": "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck."},
    {"author": "Swami Vivekananda", "quote": "The world is the great gymnasium where we come to make ourselves strong."},
    {"author": "Rabindranath Tagore", "quote": "Everything comes to us that belongs to us if we create the capacity to receive it."},
    {"author": "Jawaharlal Nehru", "quote": "There is nothing more horrifying than stupidity in action."},
    {"author": "S. Radhakrishnan", "quote": "We are apt to think that our visions of the future are the realities of the present."},
    {"author": "Mahatma Gandhi", "quote": "Happiness is when what you think, what you say, and what you do are in harmony."},
    {"author": "A.P.J. Abdul Kalam", "quote": "Let us sacrifice our today so that our children can have a better tomorrow."},
    {"author": "Swami Vivekananda", "quote": "The more we come out and do good to others, the more our hearts will be purified, and God will be in them."},
    {"author": "Rabindranath Tagore", "quote": "Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky."},
    {"author": "Jawaharlal Nehru", "quote": "The art of a people is a true mirror to their minds."},
    {"author": "S. Radhakrishnan", "quote": "Tolerance is the homage which the finite mind pays to the inexhaustibility of the infinite."},
    {"author": "Mahatma Gandhi", "quote": "Strength does not come from physical capacity. It comes from an indomitable will."},
    {"author": "A.P.J. Abdul Kalam", "quote": "If you want to shine like a sun, first burn like a sun."},
    {"author": "Swami Vivekananda", "quote": "You cannot believe in God until you believe in yourself."},
    {"author": "Rabindranath Tagore", "quote": "Faith is the bird that feels the light when the dawn is still dark."},
    {"author": "Jawaharlal Nehru", "quote": "The person who runs away exposes himself to that very danger more than a person who sits quietly."},
    {"author": "S. Radhakrishnan", "quote": "The end-product of education should be a free creative man, who can battle against historical circumstances and adversities of nature."},
    {"author": "Mahatma Gandhi", "quote": "The future depends on what you do today."},
    {"author": "A.P.J. Abdul Kalam", "quote": "To become 'unique,' the challenge is to fight the hardest battle which anyone can imagine until you reach your destination."},
    {"author": "Swami Vivekananda", "quote": "Talk to yourself once in a day, otherwise you may miss meeting an excellent person in this world."},
    {"author": "Rabindranath Tagore", "quote": "The butterfly counts not months but moments, and has time enough."},
    {"author": "Jawaharlal Nehru", "quote": "Ignorance is always afraid of change."},
    {"author": "S. Radhakrishnan", "quote": "The true teachers are those who help us think for ourselves."},
    {"author": "Mahatma Gandhi", "quote": "The weak can never forgive. Forgiveness is the attribute of the strong."},
    {"author": "A.P.J. Abdul Kalam", "quote": "Excellence is a continuous process and not an accident."},
    {"author": "Swami Vivekananda", "quote": "All power is within you; you can do anything and everything."},
    {"author": "Rabindranath Tagore", "quote": "Death is not extinguishing the light; it is only putting out the lamp because the dawn has come."},
    {"author": "Jawaharlal Nehru", "quote": "Action itself, so long as I am convinced that it is right action, gives me satisfaction."},
    {"author": "S. Radhakrishnan", "quote": "True knowledge gives a moral standing and moral strength."},
    {"author": "Mahatma Gandhi", "quote": "The best way to find yourself is to lose yourself in the service of others."},
    {"author": "A.P.J. Abdul Kalam", "quote": "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action."},
    {"author": "Swami Vivekananda", "quote": "Take risks in your life. If you win, you can lead. If you lose, you can guide."},
    {"author": "Rabindranath Tagore", "quote": "Let your life lightly dance on the edges of Time like dew on the tip of a leaf."},
    {"author": "Jawaharlal Nehru", "quote": "Failure comes only when we forget our ideals and objectives and principles."},
    {"author": "S. Radhakrishnan", "quote": "When we think we know, we cease to learn."},
    {"author": "A.P.J. Abdul Kalam", "quote": "You have to dream before your dreams can come true."},
    {"author": "Swami Vivekananda", "quote": "Arise, awake, and stop not till the goal is reached."},
    {"author": "Rabindranath Tagore", "quote": "You can't cross the sea merely by standing and staring at the water."},
    {"author": "Mahatma Gandhi", "quote": "Be the change that you wish to see in the world."}
];


// Middleware to parse JSON
app.use(express.json());

// Endpoint to get all quotes
app.get('/api/quotes', (req, res) => {
  res.json(quotes);
});

// Endpoint to get a random quote
app.get('/api/quotes/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
});

// Endpoint to get a quote by a specific author
app.get('/api/quotes/:author', (req, res) => {
  const author = req.params.author;
  const quote = quotes.find(q => q.author.toLowerCase() === author.toLowerCase());
  if (quote) {
    res.json(quote);
  } else {
    res.status(404).json({ message: 'Quote not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
