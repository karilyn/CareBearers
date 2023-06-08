class KidsController < ApplicationController
  before_action :set_kid, only: %i[ show edit update destroy ]
  before_action :authorized
  # GET /kids or /kids.json
  def index
    # @kids = Kid.all
    # get only kids associated with user logged in 
    @kids = Kid.where(parent_id: @user.id)
    render json: @kids
  end

  # GET /kids/1 or /kids/1.json
  def show
  end

  # GET /kids/new
  def new
    @kid = Kid.new
  end

  # GET /kids/1/edit
  def edit
  end

  # POST /kids or /kids.json
  def create
    @kid = Kid.create(kid_params)
    @kid.user = @user

    respond_to do |format|
      if @kid.save
        format.html { redirect_to kid_url(@kid), notice: "Kid was successfully created." }
        format.json { render :show, status: :created, location: @kid }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @kid.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /kids/1 or /kids/1.json
  def update
    respond_to do |format|
      if @kid.update(kid_params)
        format.html { redirect_to kid_url(@kid), notice: "Kid was successfully updated." }
        format.json { render :show, status: :ok, location: @kid }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @kid.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /kids/1 or /kids/1.json
  def destroy
    @kid.destroy

    respond_to do |format|
      format.html { redirect_to kids_url, notice: "Kid was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_kid
      @kid = Kid.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def kid_params
      params.require(:kid).permit(:parent_id, :first_name, :last_name, :age, :description)
    end
end
