class User < ApplicationRecord
  has_secure_password

  validates :first_name, present, length: { in: 2..254 }
  validates :last_name, present, length: { in: 2..254 }
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, presence: true, uniqueness: { case_sensitive: false }

  has_many :reservations
  has_many :flights, through: :reservations
end
