using ReactRegistrationForm.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ReactRegistrationForm.Services
{
    public class AtheleteService
    {
        private static List<Athlete> athletes = new List<Athlete>();
        private static int Count = 1;
        private static readonly string[] names = new string[] { "Zippy", "Sammy", "Nibbit", "Mitchy", "Freddy", "Marley", "Effie", "Diggy" };
        private static readonly string[] sports = new string[] { "Stick Jumping", "Hoop Leaping", "Lawn Running", "Cord Munching" };
        private static readonly string[] breeds = new string[] { "American", "Teddy", "Abyssian", "Rex", "American Crested" };
        static AtheleteService()
        {
            Random rnd = new Random();
            for (int i = 0; i < 5; i++)
            {
                Athlete user = new Athlete
                {
                    Id = Count,
                    Position = Count,
                    Name = names[Count++],
                    Sports = sports[rnd.Next(sports.Length)],
                    Breed = breeds[rnd.Next(breeds.Length)],
                    Weight = rnd.Next(70, 120) * 10,
                    Age = rnd.Next(40, 80)/10
                };
                athletes.Add(user);
            }
        }
        public List<Athlete> GetAll()
        {
            return athletes.OrderBy(a => a.Position).ToList();
        }
        public Athlete GetById(int id)
        {
            return athletes.Where(user => user.Id == id).FirstOrDefault();
        }
        public Athlete Create(Athlete athlete)
        {
            athlete.Id = Count++;
            athletes.Add(athlete);
            return athlete;
        }
        public void Update(int id, Athlete athlete)
        {
            Athlete athleteToUpdate = athletes.Where(n => n.Id == id).FirstOrDefault();
            athleteToUpdate.Position = athlete.Position;
            athleteToUpdate.Name = athlete.Name;            
            athleteToUpdate.Sports = athlete.Sports;
            athleteToUpdate.Breed = athlete.Breed;
            athleteToUpdate.Weight = athlete.Weight;
            athleteToUpdate.Age = athlete.Age;
        }
        public void Delete(int id)
        {
            athletes.RemoveAll(n => n.Id == id);
        }
    }
}
