# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "seeding...🌱"


g1 = Group.create(group_name: "Brooks Family", how_many_members: 1, created_at: "2022-9-12" )
#add members column later through controller or serializer

u1 = User.create(username: "Stephanie", email: "steph@gmail.com", password: "12345", admin: true, created_by_invite: false, group_id: g1.id)

p1 = Post.create(caption: "Hello Brooks Family!", created_at: "2022-9-13 9:00AM", user_id: u1.id )
#no image and updated_at

puts "seeding done 🌱"