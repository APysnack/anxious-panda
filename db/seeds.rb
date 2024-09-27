User.find_or_create_by(email: 'purleedef@gmail.com') do |u|
  u.password = 'password'
end

User.find_or_create_by(email: 'test@gmail.com') do |u|
  u.password = 'password'
end

world_tournament = Game.find_or_create_by(name: 'World Tournament')
monopoly = Game.find_or_create_by(name: 'Monopoly')

WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Dwarf", category: "race")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Minotaur", category: "race")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Djinn", category: "race")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Dragonborn", category: "race")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Giant", category: "race")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Treant", category: "race")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Human", category: "race")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Goblin", category: "race")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Naga", category: "race")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Orc", category: "race")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Satyr", category: "race")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Harpy", category: "race")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Undead", category: "race")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Elf", category: "race")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Hobbit", category: "race")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Troll", category: "race")

WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Short Sword", category: "weapon")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Medicine Rod", category: "weapon")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Mace", category: "weapon")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Long Bow", category: "weapon")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Scythe", category: "weapon")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Magic Orb", category: "weapon")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Battle Flail", category: "weapon")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "War Hammer", category: "weapon")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Battle Axe", category: "weapon")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Spear", category: "weapon")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Trident", category: "weapon")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Daggers", category: "weapon")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Bastard Sword", category: "weapon")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Amulet", category: "weapon")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Crossbow", category: "weapon")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Spiked Club", category: "weapon")

WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Warlock", category: "class")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Hunter", category: "class")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Assassin", category: "class")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Barbarian", category: "class")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Warrior", category: "class")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Shaman", category: "class")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Death Knight", category: "class")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Thief", category: "class")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Druid", category: "class")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Guardian", category: "class")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Berseker", category: "class")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Shadowcaster", category: "class")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Paladin", category: "class")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Marksman", category: "class")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Battle Maiden", category: "class")
WorldTournamentCard.find_or_create_by(game: world_tournament, name: "Necromancer", category: "class")

MonopolyCard.find_or_create_by(game: monopoly, name: "Community Chest", category: "community_chest")
MonopolyCard.find_or_create_by(game: monopoly, name: "Chance", category: "chance")