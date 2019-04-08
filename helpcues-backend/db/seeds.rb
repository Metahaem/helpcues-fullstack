# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Act.destroy_all
User.destroy_all
Category.destroy_all


users = [{name: "Janine"}, {name: "Tom"}]

users.each {|user| User.create!(user)}

categories = [
  {name: "Animals"},
  {name: "Environment"},
  {name: "Family/Friends"},
  {name: "Charity"},
  {name: "At Work"},
  ]

categories.each {|category| Category.create!(category)}

an_cat_id = Category.find{|cat| cat.name == "Animals"}.id
en_cat_id = Category.find{|cat| cat.name == "Environment"}.id
fam_cat_id = Category.find{|cat| cat.name == "Family/Friends"}.id
char_cat_id = Category.find{|cat| cat.name == "Charity"}.id
work_cat_id = Category.find{|cat| cat.name == "At Work"}.id

jan_id = User.find{|user| user.name == "Janine"}.id
tom_id = User.find{|user| user.name == "Tom"}.id

acts = [
  {content: "Pet a puppy", user_id: jan_id, category_id: an_cat_id, image_url: "https://media.giphy.com/media/qPuhFBQt8xLEY/giphy.gif"},
  {content: "Pick up some litter", user_id: tom_id, category_id: en_cat_id, image_url: "https://media.giphy.com/media/1YctWh7oIsZPkTXMw2/giphy.gif"},
  {content: "Donate to a local charity", user_id: jan_id, category_id: char_cat_id, image_url: "https://media.giphy.com/media/3o6Zt3OhbsQ5VLPmBW/giphy.gif"},
  {content: "Buy a hot meal for a homeless person", user_id: tom_id, category_id: char_cat_id, image_url: "https://media3.giphy.com/media/43JIxXoEoT4ABygGZ7/giphy.gif?cid=3640f6095c4b254f43746d4677546968"},
  {content: "Volunteer at an animal shelter", user_id: jan_id, category_id: an_cat_id, image_url: "https://media.giphy.com/media/3o7bueStqEca4YftOE/giphy.gif"},
  {content: "Cook/bake something for your neighbour", user_id: tom_id, category_id: fam_cat_id, image_url: "https://media.giphy.com/media/Y09s2Frxp7wpBGXTyt/giphy.gif"},
  {content: "Send a nice message to someone you care about", user_id: tom_id, category_id: fam_cat_id, image_url: "https://media.giphy.com/media/Vj02LjCFMdk0U/giphy.gif"},
  {content: "Compliment someone", user_id: jan_id, category_id: fam_cat_id, image_url: "https://media.giphy.com/media/3o751Sq3f0eeLjQB0Y/giphy.gif"},
  {content: "Invite a co-worker to lunch", user_id: tom_id, category_id: work_cat_id, image_url: "https://media.giphy.com/media/yxVRIRF0WJUkBckw8g/giphy.gif"},
  {content: "Plant a tree", user_id: jan_id, category_id: en_cat_id, image_url: "https://media.giphy.com/media/3o7TKp3cFUIxiCW8KI/giphy.gif"},
  {content: "Buy flowers for a loved one", user_id: jan_id, category_id: fam_cat_id, image_url: "https://media1.giphy.com/media/l2QZPmy4WMaj65uxO/giphy.gif?cid=3640f6095c484cf253504349518aa7a6"},
  {content: "Bring reusable bags to the supermarket", user_id: jan_id, category_id: en_cat_id, image_url: "https://media2.giphy.com/media/CBzsygeMFUK4/giphy.gif?cid=3640f6095c484e884977424e3648e527"},
  {content: "Volunteer at an old people's home", user_id: tom_id, category_id: char_cat_id, image_url: "https://media0.giphy.com/media/THWLzRn1UFfSahnXsf/giphy.gif?cid=3640f6095c484f7b706777513259b072"},
  {content: "Make a handmade birthday card for someone", user_id: jan_id, category_id: fam_cat_id, image_url: "https://media2.giphy.com/media/2A1hOQAHMBi7SpjpPB/giphy.gif?cid=3640f6095c4850966477305a63c82f0f"},
  {content: "Check in on an elderly neighbour", user_id: jan_id, category_id: fam_cat_id, image_url: "https://media2.giphy.com/media/qeQrQyjhswFgs/giphy.gif?cid=3640f6095c484f12316a426363496693"},
  {content: "Feed the birds in your local park", user_id: jan_id, category_id: an_cat_id, image_url: "https://media3.giphy.com/media/krewXUB6LBja/giphy.gif?cid=3640f6095c48518b584b597a2ebb9847"},
  {content: "Buy a coffee for the person behind you in line", user_id: jan_id, category_id: char_cat_id, image_url: "https://media2.giphy.com/media/l1IY8onMgFEotIzew/giphy.gif?cid=3640f6095c4852ee3874594759b516a0"},
  {content: "Write a recommendation for a co-worker on LinkedIn", user_id: jan_id, category_id: work_cat_id, image_url: "https://media2.giphy.com/media/Pho3J91RgAubP2uhfC/giphy.gif?cid=3640f6095c4855903678685a3211ad49"},
  {content: "Keep an extra umbrella at work, so you can lend it out when it rains.", user_id: jan_id, category_id: work_cat_id, image_url: "https://media2.giphy.com/media/14d8cRr25KPxbG/giphy.gif?cid=3640f6095c4855cc72787873632dcf88"},
  {content: "Gift an inspirational book", user_id: jan_id, category_id: fam_cat_id, image_url: "https://media0.giphy.com/media/NFA61GS9qKZ68/giphy.gif?cid=3640f6095c485467334a6f41596a04b2"},
  {content: "Send a gratitude email to a coworker who deserves more recognition", user_id: jan_id, category_id: work_cat_id, image_url: "https://media0.giphy.com/media/IcGkqdUmYLFGE/giphy.gif?cid=3640f6095c4857b23173665851d35be5"},
  {content: "Volunteer to read to kids at an after-school programme", user_id: jan_id, category_id: char_cat_id, image_url: "https://media3.giphy.com/media/8dYmJ6Buo3lYY/giphy.gif?cid=3640f6095c4858184f4c506a7320ca9e"},
  {content: "Run an errand for a family member or friend", user_id: jan_id, category_id: fam_cat_id, image_url: "https://media2.giphy.com/media/xTiTnuhyBF54B852nK/giphy.gif?cid=3640f6095c48595a37774a6a415fc962"},
  {content: "Help a friend redecorate", user_id: jan_id, category_id: fam_cat_id, image_url: "https://media2.giphy.com/media/irCqmgDvJYAdGq0RmK/giphy.gif?cid=3640f6095c4859cf384e6348512425d6"},
  {content: "Too many clothes? Donate some to charity.", user_id: jan_id, category_id: char_cat_id, image_url: "https://media2.giphy.com/media/cmxZ9YNEjYWt60vL0W/giphy.gif?cid=3640f6095c485a0756556e324d4bd600"}
]



acts.each {|act| Act.create!(act)}


0
