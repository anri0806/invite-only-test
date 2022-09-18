class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.boolean :admin
      t.boolean :created_by_invite
      t.integer :group_id
      t.timestamps
    end
  end
end
