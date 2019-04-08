class Api::V1::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render json: @categories
  end



  private

    def category_params
      params.permit(:name)
    end

    def find_category
      @category = Category.find(params[:id])
    end

end
