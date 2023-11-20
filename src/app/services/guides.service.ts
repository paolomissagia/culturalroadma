import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuidesService {
  guidesData = [
    {
      id: 1,
      category: 'literature',
      level: 'beginner',
      items: [
        {
          title: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald',
        },
        {
          title: 'The Sun Also Rises',
          author: 'Ernest Hemingway',
        },
        {
          title: 'Nineteen Eighty-Four',
          author: 'George Orwell',
        },
        {
          title: 'Lolita',
          author: 'Vladimir Nabokov',
        },
        {
          title: 'The Metamorphosis',
          author: 'Franz Kafka',
        },
      ],
    },
    {
      id: 2,
      category: 'literature',
      level: 'intermediate',
      items: [
        {
          title: 'One Hundred Years of Solitude',
          author: 'Gabriel Garcia Marques',
        },
        {
          title: 'The Magic Mountain',
          author: 'Thomas Mann',
        },
        {
          title: 'Anna Karenina',
          author: 'Leo Tolstoy',
        },
        {
          title: 'Crime and Punishment',
          author: 'Fyodor Dostoevsky',
        },
        {
          title: 'Madame Bovary',
          author: 'Gustave Flaubert',
        },
      ],
    },
    {
      id: 3,
      category: 'literature',
      level: 'advanced',
      items: [
        {
          title: 'The Brothers Karamazov',
          author: 'Fyodor Dostoevsky',
        },
        {
          title: 'Ulysses',
          author: 'James Joyce',
        },
        {
          title: 'Don Quixote',
          author: 'Miguel de Cervantes',
        },
        {
          title: 'War and Peace',
          author: 'Leo Tolstoy',
        },
        {
          title: 'Odyssey',
          author: 'Homer',
        },
      ],
    },
    {
      id: 4,
      category: 'cinema',
      level: 'beginner',
      items: [
        {
          title: 'Vertigo',
          author: 'Alfred Hitchcock',
        },
        {
          title: 'Taxi Driver',
          author: 'Alfred Hitchcock',
        },
        {
          title: 'The Graduate',
          author: 'Mike Nichols',
        },
        {
          title: "It's a wonderful Life",
          author: 'Frank Capra',
        },
        {
          title: 'Annie Hall',
          author: 'Woody Allen',
        },
      ],
    },
    {
      id: 5,
      category: 'cinema',
      level: 'intermediate',
      items: [
        {
          title: 'The Godfather',
          author: 'Francis Ford Coppola',
        },
        {
          title: 'Raging Bull',
          author: 'Martin Scorsese',
        },
        {
          title: '2001: A Space Odyssey',
          author: 'Stanley Kubrick',
        },
        {
          title: 'Apocalypse Now',
          author: 'Francis Ford Coppola',
        },
        {
          title: 'Breathless',
          author: 'Jean-Luc Godard',
        },
      ],
    },
    {
      id: 6,
      category: 'cinema',
      level: 'advanced',
      items: [
        {
          title: 'Citizen Kane',
          author: 'Orson Welles',
        },
        {
          title: 'Lawrence of Arabia',
          author: 'David Lean',
        },
        {
          title: 'Tokyo Story',
          author: 'Yasujiro Ozy',
        },
        {
          title: '8 1/2',
          author: 'Federico Fellini',
        },
        {
          title: 'Seven Samurai',
          author: 'Akira Kurosawa',
        },
      ],
    },
    {
      id: 7,
      category: 'music',
      level: 'beginner',
      items: [
        {
          title: 'Fur Elise',
          author: 'Ludwig van Beethoven',
        },
        {
          title: 'Ave Maria',
          author: 'Franz Schubert',
        },
        {
          title: 'Toccata and Fugue',
          author: 'Johann Sebastian Bach',
        },
        {
          title: 'Piano Sonata No. 14',
          author: 'Ludwig van Beethoven',
        },
        {
          title: 'Nocturne in E Flat Major',
          author: 'Frederic Chopin',
        },
      ],
    },
    {
      id: 8,
      category: 'music',
      level: 'intermediate',
      items: [
        {
          title: 'Piano Concerto No. 2 in C minor',
          author: 'Sergei Rachmaninoff',
        },
        {
          title: 'Cello Concerto in E minor',
          author: 'Edward Elgar',
        },
        {
          title: 'The Four Seasons',
          author: 'Antonio Vivaldi',
        },
        {
          title: 'Piano Concert No. 5 in E-flat major',
          author: 'Ludwig van Beethoven',
        },
        {
          title: 'Symphony No. 9 in E minor',
          author: 'Antonin Dvorak',
        },
      ],
    },
    {
      id: 9,
      category: 'music',
      level: 'advanced',
      items: [
        {
          title: 'St Matthew Passion',
          author: 'Johann Sebastian Bach',
        },
        {
          title: 'Symphony No. 9',
          author: 'Ludwig van Beethoven',
        },
        {
          title: 'Violin Concerto in D minor',
          author: 'Jean Sibelius',
        },
        {
          title: 'Requiem in D minor',
          author: 'Wolfgang Amadeus Mozart',
        },
        {
          title: 'Symphony No. 2',
          author: 'Gustav Mahler',
        },
      ],
    },
  ];

  constructor() {}

  getGuides(category: string, level: string): Observable<any> {
    const filteredData = this.applyFilters(category, level, this.guidesData);
    console.log(filteredData);
    return of(filteredData);
  }

  private applyFilters(category: string, level: string, data: any) {
    return data.filter((element: any) => {
      return element.category === category && element.level === level;
    });
  }
}
