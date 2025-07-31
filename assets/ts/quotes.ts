export const quotes = [
  {
    text: 'Keep your eyes on the stars and your feet on the ground.',
    author: 'Theodore Roosevelt',
  },
  {
    text: 'The best way to get started is to quit talking and begin doing.',
    author: 'Walt Disney',
  },
  { text: 'Don’t let yesterday take up too much of today.', author: 'Will Rogers' },
  {
    text: 'It’s not whether you get knocked down, it’s whether you get up.',
    author: 'Vince Lombardi',
  },
  {
    text: 'If you are working on something exciting, it will keep you motivated.',
    author: 'Steve Jobs',
  },
  { text: 'Success is not in what you have, but who you are.', author: 'Bo Bennett' },
  {
    text: 'Failure will never overtake me if my determination to succeed is strong enough.',
    author: 'Og Mandino',
  },
  { text: 'We may encounter many defeats but we must not be defeated.', author: 'Maya Angelou' },
  {
    text: 'Knowing is not enough; we must apply. Wishing is not enough; we must do.',
    author: 'Johann Wolfgang Von Goethe',
  },
  {
    text: 'The harder you work, the luckier you get.',
    author: 'Gary Player',
  },
  {
    text: 'Dream no small dreams for they have no power to move the hearts of men.',
    author: 'Johann Wolfgang Von Goethe',
  },
  { text: 'Don’t watch the clock; do what it does. Keep going.', author: 'Sam Levenson' },
  { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
  { text: 'You must do the things you think you cannot do.', author: 'Eleanor Roosevelt' },
  {
    text: 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    author: 'Winston S. Churchill',
  },
  { text: 'The future depends on what you do today.', author: 'Mahatma Gandhi' },
  { text: 'The secret of getting ahead is getting started.', author: 'Mark Twain' },
  { text: 'It always seems impossible until it’s done.', author: 'Nelson Mandela' },
  { text: 'Hard work beats talent when talent doesn’t work hard.', author: 'Tim Notke' },
  { text: 'Start where you are. Use what you have. Do what you can.', author: 'Arthur Ashe' },
  { text: 'Don’t limit your challenges. Challenge your limits.', author: 'Jerry Dunn' },
  {
    text: 'Do something today that your future self will thank you for.',
    author: 'Sean Patrick Flanery',
  },
  { text: 'Little things make big days.', author: 'Isabel Marant' },
  {
    text: 'You don’t have to be great to start, but you have to start to be great.',
    author: 'Zig Ziglar',
  },
  {
    text: 'You are never too old to set another goal or to dream a new dream.',
    author: 'C.S. Lewis',
  },
  { text: "Opportunities don't happen, you create them.", author: 'Chris Grosser' },
  {
    text: 'Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.',
    author: 'Roy T. Bennett',
  },
  { text: 'Discipline is the bridge between goals and accomplishment.', author: 'Jim Rohn' },
  {
    text: 'Success usually comes to those who are too busy to be looking for it.',
    author: 'Henry David Thoreau',
  },
  { text: 'Don’t wish it were easier. Wish you were better.', author: 'Jim Rohn' },
  {
    text: 'Don’t let yesterday take up too much of today.',
    author: 'Will Rogers',
  },
]

export interface Quote {
  text: string
  author: string
}

/**
 * Get a quote based on the current day of the month
 * Uses modulo to cycle through the quotes array
 */
export function getQuoteOfTheDay(): Quote {
  const today = new Date()
  const dayOfMonth = today.getDate()
  const index = (dayOfMonth - 1) % quotes.length
  return quotes[index]
}
