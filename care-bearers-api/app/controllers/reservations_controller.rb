class ReservationsController < ApplicationController
  before_action :set_reservation, only: %i[ show edit update destroy ]
  before_action :authorized
  # GET /reservations or /reservations.json
  def index
    # @reservations = Reservation.all
    # find only reservations by that user logged in
    @reservations = Reservation.all
    @reviews = Review.where(reviewer_id: @user.id)
    render json:  { reservations: @reservations, reviews: @reviews }
  end

  # GET /reservations/1 or /reservations/1.json
  def show
  end

  # GET /reservations/new
  def new
    @reservation = Reservation.new
  end

  # GET /reservations/1/edit
  def edit
  end

  # POST /reservations or /reservations.json
  def create
    puts "In create reservation"
    # binding.break
    @reservation = Reservation.new(reservation_params)
    @reservation.parent_id = @user.id
    @reservation.save


    if @reservation.valid?
      render json: { reservation: @reservation }
    else
      render json: { error: 'Failed to create reservation' }

    # respond_to do |format|
    #   if @reservation.save
    #     render json: @reservation, status: :created, location: @reservation
    #   # format.html { redirect_to reservation_url(@reservation), notice: "Booking was successfully created." }
    #     # format.json { render :show, status: :created, location: @reservation }        #
    #   else
    #     format.html { render :new, status: :unprocessable_entity }
    #     format.json { render json: @reservation.errors, status: :unprocessable_entity }
    #   end
    #
    end
  end

  # PATCH/PUT /reservations/1 or /reservations/1.json
  def update
    # @reservation.status = reservation_params[:status]
    # @reservation.save
    if @reservation.update(reservation_params)
      render json: @reservation
    else
      render json: {error: "update didn't work"}
    end
 
    # respond_to do |format|
    #   if @reservation.update(reservation_params)
    #     format.html { redirect_to reservation_url(@reservation), notice: "Booking was successfully updated." }
    #     format.json { render :show, status: :ok, location: @reservation }
    #   else
    #     format.html { render :edit, status: :unprocessable_entity }
    #     format.json { render json: @reservation.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  # DELETE /reservations/1 or /reservations/1.json
  def destroy
    @reservation.destroy

    respond_to do |format|
      format.html { redirect_to reservations_url, notice: "Reservation was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reservation
      @reservation = Reservation.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def reservation_params
      params.require(:reservation).permit(:start_time, :duration_in_minutes, :end_time, :num_of_children, :city, :street, :post_code, :province, :caregiver_id, :status)

      # params.require(:reservation).permit(:start_time, :end_time, :num_of_children, :city, :street, :post_code, :status, :cost, :stripe_charge_id, :caregiver_id)
    end
end
