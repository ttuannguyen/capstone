class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :merchant, :date, :amount, :category_id
  
  # belongs_to :user
  # belongs_to :category
  
  # has_many :notes
  # def amount 
  #   "$#{'%.2f' %object.amount}"
  # end

end
