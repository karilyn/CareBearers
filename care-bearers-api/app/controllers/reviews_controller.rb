class ReviewsController < ApplicationController
  before_action :set_review, only: %i[ show edit update destroy ]
  before_action :authorized
  # GET /reviews or /reviews.json
  def index
    @reviews = Review.all
    # find only reviews by that user logged in 
    # @reviews = Review.where(reviewer_id: @user.id)
    render json: @reviews
  end

  # GET /reviews/1 or /reviews/1.json
  def show
  end

  # GET /reviews/new
  def new
    @review = Review.new
  end

  # GET /reviews/1/edit
  def edit
  end

  # POST /reviews or /reviews.json
  def create
    puts "In create method"
    @review = Review.new(review_params)
    @review.reviewer_id = @user.id
    @review.save

  
    
    if @review.valid?
      render json: { review: @review} 
    else 
      render json: {error: "Could not create review"}
    end
    # respond_to do |format|
    #   if @review.save
    #     format.html { redirect_to review_url(@review), notice: "Review was successfully created." }
    #     format.json { render :show, status: :created, location: @review }
    #   else
    #     format.html { render :new, status: :unprocessable_entity }
    #     format.json { render json: @review.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  # PATCH/PUT /reviews/1 or /reviews/1.json
  def update
    respond_to do |format|
      if @review.update(review_params)
        format.html { redirect_to review_url(@review), notice: "Review was successfully updated." }
        format.json { render :show, status: :ok, location: @review }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @review.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /reviews/1 or /reviews/1.json
  def destroy
    @review.destroy

    respond_to do |format|
      format.html { redirect_to reviews_url, notice: "Review was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def review_params
      params.require(:review).permit(:rating, :message, :reservation_id)
    end
end
