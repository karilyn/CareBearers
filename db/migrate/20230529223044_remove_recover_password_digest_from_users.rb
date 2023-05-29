class RemoveRecoverPasswordDigestFromUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :recovery_password_digest, :string
  end
end
