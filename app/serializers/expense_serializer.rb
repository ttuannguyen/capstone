class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :merchant, :date, :amount, :category_id, :user_id
end
