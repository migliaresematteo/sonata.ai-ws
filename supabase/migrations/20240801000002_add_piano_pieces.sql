-- Add 50 piano pieces to the database
INSERT INTO pieces (id, title, composer, instrument, period, genre, difficulty, description, average_duration)
VALUES
  (uuid_generate_v4(), 'Prelude in C Major (WTC Book I)', 'Johann Sebastian Bach', 'piano', 'Baroque', 'Prelude', 5, 'A beautiful and flowing prelude that opens Bach''s Well-Tempered Clavier Book I.', 180),
  (uuid_generate_v4(), 'Prelude in C Minor (WTC Book I)', 'Johann Sebastian Bach', 'piano', 'Baroque', 'Prelude', 6, 'A dramatic and expressive prelude in C minor from the Well-Tempered Clavier.', 150),
  (uuid_generate_v4(), 'Invention No. 1 in C Major', 'Johann Sebastian Bach', 'piano', 'Baroque', 'Invention', 4, 'A two-part invention that serves as an excellent introduction to contrapuntal playing.', 90),
  (uuid_generate_v4(), 'Invention No. 4 in D Minor', 'Johann Sebastian Bach', 'piano', 'Baroque', 'Invention', 5, 'A melancholic and expressive two-part invention in D minor.', 75),
  (uuid_generate_v4(), 'Minuet in G Major', 'Johann Sebastian Bach', 'piano', 'Baroque', 'Minuet', 3, 'A charming and elegant minuet, perfect for early intermediate students.', 120),
  (uuid_generate_v4(), 'Sonata in C Major, K. 545 (1st mvt)', 'Wolfgang Amadeus Mozart', 'piano', 'Classical', 'Sonata', 6, 'Often called the "Sonata Facile" or "Sonata Semplice", this is one of Mozart''s most accessible sonatas.', 240),
  (uuid_generate_v4(), 'Sonata in A Major, K. 331 (1st mvt)', 'Wolfgang Amadeus Mozart', 'piano', 'Classical', 'Sonata', 7, 'A set of variations on a simple theme, rather than the usual sonata form.', 300),
  (uuid_generate_v4(), 'Rondo Alla Turca', 'Wolfgang Amadeus Mozart', 'piano', 'Classical', 'Rondo', 7, 'The famous "Turkish March" that forms the finale of Mozart''s Sonata in A Major, K. 331.', 210),
  (uuid_generate_v4(), 'Sonata in C Minor, Op. 13 "Pathétique" (1st mvt)', 'Ludwig van Beethoven', 'piano', 'Classical', 'Sonata', 8, 'A passionate and dramatic sonata with a slow introduction followed by an energetic allegro.', 480),
  (uuid_generate_v4(), 'Sonata in C Minor, Op. 13 "Pathétique" (2nd mvt)', 'Ludwig van Beethoven', 'piano', 'Classical', 'Sonata', 6, 'The famous Adagio cantabile movement with its lyrical melody over a steady accompaniment.', 300),
  (uuid_generate_v4(), 'Für Elise', 'Ludwig van Beethoven', 'piano', 'Classical', 'Bagatelle', 5, 'One of the most famous piano pieces ever written, with its instantly recognizable opening theme.', 180),
  (uuid_generate_v4(), 'Moonlight Sonata (1st mvt)', 'Ludwig van Beethoven', 'piano', 'Classical', 'Sonata', 6, 'The haunting first movement of Beethoven''s Piano Sonata No. 14 in C-sharp minor.', 300),
  (uuid_generate_v4(), 'Waltz in A Minor, Op. posth.', 'Frédéric Chopin', 'piano', 'Romantic', 'Waltz', 5, 'A melancholic waltz with a simple yet expressive melody.', 180),
  (uuid_generate_v4(), 'Waltz in B Minor, Op. 69, No. 2', 'Frédéric Chopin', 'piano', 'Romantic', 'Waltz', 6, 'A nostalgic waltz with a lyrical melody and flowing accompaniment.', 210),
  (uuid_generate_v4(), 'Nocturne in E-flat Major, Op. 9, No. 2', 'Frédéric Chopin', 'piano', 'Romantic', 'Nocturne', 7, 'One of Chopin''s most famous nocturnes, with a beautiful, ornate melody over a gentle accompaniment.', 270),
  (uuid_generate_v4(), 'Prelude in E Minor, Op. 28, No. 4', 'Frédéric Chopin', 'piano', 'Romantic', 'Prelude', 5, 'A short but deeply expressive prelude with a somber, funeral-like quality.', 120),
  (uuid_generate_v4(), 'Prelude in A Major, Op. 28, No. 7', 'Frédéric Chopin', 'piano', 'Romantic', 'Prelude', 4, 'A brief, dance-like prelude with a mazurka rhythm.', 60),
  (uuid_generate_v4(), 'Prelude in C Minor, Op. 28, No. 20', 'Frédéric Chopin', 'piano', 'Romantic', 'Prelude', 5, 'Often called the "Funeral March" prelude, with its solemn chordal progression.', 90),
  (uuid_generate_v4(), 'Impromptu in A-flat Major, Op. 90, No. 4', 'Franz Schubert', 'piano', 'Romantic', 'Impromptu', 7, 'A flowing, lyrical piece with a memorable theme and variations.', 420),
  (uuid_generate_v4(), 'Moment Musical in F Minor, Op. 94, No. 3', 'Franz Schubert', 'piano', 'Romantic', 'Character Piece', 6, 'A lively piece with a Russian dance-like character.', 180),
  (uuid_generate_v4(), 'Arabesque No. 1', 'Claude Debussy', 'piano', 'Impressionist', 'Arabesque', 6, 'A flowing, elegant piece with a dreamy, atmospheric quality.', 270),
  (uuid_generate_v4(), 'Clair de Lune', 'Claude Debussy', 'piano', 'Impressionist', 'Suite', 7, 'The famous third movement from Debussy''s Suite Bergamasque, evoking the serene beauty of moonlight.', 300),
  (uuid_generate_v4(), 'Reverie', 'Claude Debussy', 'piano', 'Impressionist', 'Character Piece', 6, 'A dreamy, contemplative piece with Debussy''s characteristic harmonic language.', 240),
  (uuid_generate_v4(), 'Gymnopédie No. 1', 'Erik Satie', 'piano', 'Early Modern', 'Character Piece', 4, 'A slow, atmospheric piece with a simple melody over a gentle accompaniment.', 180),
  (uuid_generate_v4(), 'Gnossienne No. 1', 'Erik Satie', 'piano', 'Early Modern', 'Character Piece', 5, 'An exotic, haunting piece with an improvisatory feel and unusual harmonies.', 210),
  (uuid_generate_v4(), 'Consolation No. 3 in D-flat Major', 'Franz Liszt', 'piano', 'Romantic', 'Character Piece', 6, 'A lyrical, nocturne-like piece with a singing melody.', 240),
  (uuid_generate_v4(), 'Liebestraum No. 3', 'Franz Liszt', 'piano', 'Romantic', 'Character Piece', 8, 'A passionate and virtuosic piece based on a poem about love.', 300),
  (uuid_generate_v4(), 'Hungarian Rhapsody No. 2', 'Franz Liszt', 'piano', 'Romantic', 'Rhapsody', 9, 'A fiery and technically demanding showpiece based on Hungarian folk themes.', 600),
  (uuid_generate_v4(), 'Venetian Boat Song, Op. 30, No. 6', 'Felix Mendelssohn', 'piano', 'Romantic', 'Song Without Words', 5, 'A gentle, rocking piece evoking the movement of a gondola on Venetian waters.', 180),
  (uuid_generate_v4(), 'Spring Song, Op. 62, No. 6', 'Felix Mendelssohn', 'piano', 'Romantic', 'Song Without Words', 6, 'A cheerful, flowing piece with a light, airy quality.', 150),
  (uuid_generate_v4(), 'Traumerei', 'Robert Schumann', 'piano', 'Romantic', 'Character Piece', 5, 'A dreamy, introspective piece from Schumann''s "Scenes from Childhood".', 180),
  (uuid_generate_v4(), 'The Wild Horseman', 'Robert Schumann', 'piano', 'Romantic', 'Character Piece', 4, 'A lively, energetic piece depicting a galloping horse, from "Album for the Young".', 60),
  (uuid_generate_v4(), 'The Merry Farmer', 'Robert Schumann', 'piano', 'Romantic', 'Character Piece', 3, 'A cheerful, rustic piece from "Album for the Young".', 90),
  (uuid_generate_v4(), 'Prelude in C-sharp Minor, Op. 3, No. 2', 'Sergei Rachmaninoff', 'piano', 'Romantic', 'Prelude', 8, 'A dramatic and powerful prelude with thunderous chords and a lyrical middle section.', 240),
  (uuid_generate_v4(), 'Prelude in G Minor, Op. 23, No. 5', 'Sergei Rachmaninoff', 'piano', 'Romantic', 'Prelude', 9, 'A martial, energetic prelude with a contrasting lyrical middle section.', 210),
  (uuid_generate_v4(), 'Maple Leaf Rag', 'Scott Joplin', 'piano', 'Ragtime', 'Rag', 7, 'One of the most famous ragtime compositions, with its characteristic syncopated rhythms.', 180),
  (uuid_generate_v4(), 'The Entertainer', 'Scott Joplin', 'piano', 'Ragtime', 'Rag', 6, 'A classic ragtime piece that gained renewed popularity after being featured in the film "The Sting".', 210),
  (uuid_generate_v4(), 'Solfegietto', 'Carl Philipp Emanuel Bach', 'piano', 'Classical', 'Character Piece', 7, 'A fast, virtuosic piece that tests the player''s finger dexterity.', 60),
  (uuid_generate_v4(), 'Sonatina in C Major, Op. 36, No. 1', 'Muzio Clementi', 'piano', 'Classical', 'Sonatina', 4, 'A charming, accessible sonatina perfect for intermediate students.', 240),
  (uuid_generate_v4(), 'Sonatina in G Major, Op. 36, No. 5', 'Muzio Clementi', 'piano', 'Classical', 'Sonatina', 5, 'A lively, cheerful sonatina with a memorable first movement.', 300),
  (uuid_generate_v4(), 'Tarantella', 'Albert Pieczonka', 'piano', 'Romantic', 'Character Piece', 6, 'A fast, energetic piece inspired by the Italian tarantella dance.', 180),
  (uuid_generate_v4(), 'Rustle of Spring', 'Christian Sinding', 'piano', 'Romantic', 'Character Piece', 7, 'A shimmering, virtuosic piece depicting the sounds of spring.', 210),
  (uuid_generate_v4(), 'To a Wild Rose', 'Edward MacDowell', 'piano', 'Romantic', 'Character Piece', 3, 'A simple, delicate piece with a tender melody.', 120),
  (uuid_generate_v4(), 'Prelude in D-flat Major, Op. 28, No. 15 "Raindrop"', 'Frédéric Chopin', 'piano', 'Romantic', 'Prelude', 7, 'A prelude with a repeated note pattern suggesting falling raindrops.', 300),
  (uuid_generate_v4(), 'Fantaisie-Impromptu, Op. 66', 'Frédéric Chopin', 'piano', 'Romantic', 'Impromptu', 9, 'A passionate piece with rapid outer sections framing a lyrical middle section.', 300),
  (uuid_generate_v4(), 'Revolutionary Etude, Op. 10, No. 12', 'Frédéric Chopin', 'piano', 'Romantic', 'Etude', 9, 'A fiery, technically demanding etude written in response to the fall of Warsaw.', 180),
  (uuid_generate_v4(), 'Waltz of the Flowers', 'Pyotr Ilyich Tchaikovsky', 'piano', 'Romantic', 'Waltz', 7, 'A piano arrangement of the famous waltz from "The Nutcracker" ballet.', 420),
  (uuid_generate_v4(), 'Flight of the Bumblebee', 'Nikolai Rimsky-Korsakov', 'piano', 'Romantic', 'Character Piece', 9, 'A virtuosic showpiece depicting the rapid, buzzing flight of a bumblebee.', 90),
  (uuid_generate_v4(), 'Rhapsody in Blue', 'George Gershwin', 'piano', 'Jazz/Classical Fusion', 'Rhapsody', 10, 'A groundbreaking work combining elements of classical music and jazz.', 900),
  (uuid_generate_v4(), 'Golliwog''s Cakewalk', 'Claude Debussy', 'piano', 'Impressionist', 'Character Piece', 6, 'A playful piece inspired by ragtime and cakewalk dances.', 180),
  (uuid_generate_v4(), 'The Girl with the Flaxen Hair', 'Claude Debussy', 'piano', 'Impressionist', 'Prelude', 5, 'A gentle, lyrical prelude with a simple, folk-like melody.', 150);

alter publication supabase_realtime add table pieces;
