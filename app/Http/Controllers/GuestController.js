'use strict';

const Guest = use('App/Model/Guest');
const Env = use("Env");

class GuestController {

  * index (request, response) {

  };

  * store(request, response) {
    // Takes guest input
    const guestInfo = request.only('city', 'email', 'first_name', 'home_number', 'last_name', 'mobile_number', 'post_code', 'state', 'street', 'street_2');

    try {
        guestInfo.user_id = request.authUser.id;
        const newGuest = yield Guest.create(guestInfo);
        // Respond with updated user and address information in JSON object
        return response.status(201).json(newGuest.toJSON());
    } catch (e) {
      //  hit if there is a major error saving to the database
      return response.status(400).json({
        error: e.message
      });
    }
  }

  * saveWEReport(request, response){
    let weInfo = (request.only('weInfo'));
    let guestInfo = (request.only('guestInfo'));
    weInfo = JSON.stringify(weInfo);
    let guest = yield Guest.findBy('id', guestInfo.guestInfo.id);
    guest.we_info = weInfo;
    yield guest.save();
  }

  * fetchWEReport(request, response){
    let guestID = request.param('id');
    let guest = yield Guest.findBy('id', guestID);
    console.log(guest.we_info);
    if (Env.get("NODE_ENV") === "development") {
      let weInfo = JSON.parse(guest.we_info);
    } else {
      let weInfo = guest.we_info;
    }
    if (weInfo === undefined){
      weInfo = {};
    };

        if (weInfo.weInfo.relationship === undefined){
          weInfo.weInfo.relationship = {};
        };

            if (weInfo.weInfo.relationship.spouse  === undefined){
              weInfo.weInfo.relationship.spouse = {};
            };

                if (weInfo.weInfo.relationship.spouse.first_name  === undefined){
                  weInfo.weInfo.relationship.spouse.first_name = 'Not Available';
                };

                if (weInfo.weInfo.relationship.spouse.full_name  === undefined){
                  weInfo.weInfo.relationship.spouse.full_name = 'Not Available';
                };

                if (weInfo.weInfo.relationship.spouse.id  === undefined){
                  weInfo.weInfo.relationship.spouse.id = 0;
                };

                if (weInfo.weInfo.relationship.spouse.last_name  === undefined){
                  weInfo.weInfo.relationship.spouse.last_name = 'Not Available';
                };

                if (weInfo.weInfo.relationship.spouse.middle_name  === undefined){
                  weInfo.weInfo.relationship.spouse.middle_name = 'Not Available';
                };

        if (weInfo.weInfo.id  === undefined){
          weInfo.weInfo.id = 0;
        };

        if (weInfo.weInfo.realestate  === undefined){
          weInfo.weInfo.realestate = {};
        };

            if (weInfo.weInfo.realestate.total_num_properties  === undefined){
              weInfo.weInfo.realestate.total_num_properties = 'Not Available';
            };

            if (weInfo.weInfo.realestate.total_realestate_value  === undefined){
              weInfo.weInfo.realestate.total_realestate_value = {};
            };

                if (weInfo.weInfo.realestate.total_realestate_value.min  === undefined){
                  weInfo.weInfo.realestate.total_realestate_value.min = 0;
                };

                if (weInfo.weInfo.realestate.total_realestate_value.max  === undefined){
                  weInfo.weInfo.realestate.total_realestate_value.max = 0;
                };

                if (weInfo.weInfo.realestate.total_realestate_value.value  === undefined){
                  weInfo.weInfo.realestate.total_realestate_value.value = 0;
                };

                if (weInfo.weInfo.realestate.total_realestate_value.text_low  === undefined){
                  weInfo.weInfo.realestate.total_realestate_value.text_low = '';
                };

                if (weInfo.weInfo.realestate.total_realestate_value.text_high  === undefined){
                  weInfo.weInfo.realestate.total_realestate_value.text_high = '';
                };

                if (weInfo.weInfo.realestate.total_realestate_value.text  === undefined){
                  weInfo.weInfo.realestate.total_realestate_value.text = 'Not Available';
                };

        if (weInfo.weInfo.identity  === undefined){
          weInfo.weInfo.identity = {};
        };

            if (weInfo.weInfo.identity.first_name  === undefined){
              weInfo.weInfo.identity.first_name = '';
            };

            if (weInfo.weInfo.identity.middle_name  === undefined){
              weInfo.weInfo.identity.middle_name = '';
            };

            if (weInfo.weInfo.identity.last_name  === undefined){
              weInfo.weInfo.identity.last_name = '';
            };

            if (weInfo.weInfo.identity.full_name  === undefined){
              weInfo.weInfo.identity.full_name = '';
            };

            if (weInfo.weInfo.identity.age  === undefined){
              weInfo.weInfo.identity.age = 0;
            };

            if (weInfo.weInfo.identity.gender  === undefined){
              weInfo.weInfo.identity.gender = {};
            };

                if (weInfo.weInfo.identity.gender.text  === undefined){
                  weInfo.weInfo.identity.gender.text = 'Not Available';
                };

                if (weInfo.weInfo.identity.gender.value  === undefined){
                  weInfo.weInfo.identity.gender.value = '';
                };

            if (weInfo.weInfo.identity.marital_status  === undefined){
              weInfo.weInfo.identity.marital_status = {};
            };

                if (weInfo.weInfo.identity.marital_status.text  === undefined){
                  weInfo.weInfo.identity.marital_status.text = 'Not Available';
                };

                if (weInfo.weInfo.identity.marital_status.value  === undefined){
                  weInfo.weInfo.identity.marital_status.value = '';
                };

            if (weInfo.weInfo.identity.emails  === undefined){
              weInfo.weInfo.identity.emails = [];
            };

                if (weInfo.weInfo.identity.emails.email  === undefined){
                  weInfo.weInfo.identity.emails.email = 'Not Available';
                };

        if (weInfo.weInfo.jobs  === undefined){
          weInfo.weInfo.jobs = [];
        };

            if (weInfo.weInfo.jobs.org_name  === undefined){
              weInfo.weInfo.jobs.org_name = '';
            };

            if (weInfo.weInfo.jobs.org_type  === undefined){
              weInfo.weInfo.jobs.org_type = {};
            };

                if (weInfo.weInfo.jobs.org_type.text  === undefined){
                  weInfo.weInfo.jobs.org_type.text = 'Not Available';
                };

                if (weInfo.weInfo.jobs.org_type.value  === undefined){
                  weInfo.weInfo.jobs.org_type.value = '';
                };

            if (weInfo.weInfo.jobs.title  === undefined){
              weInfo.weInfo.jobs.title = '';
            };

            if (weInfo.weInfo.jobs.phone  === undefined){
              weInfo.weInfo.jobs.phone = '';
            };

            if (weInfo.weInfo.jobs.email  === undefined){
              weInfo.weInfo.jobs.email = 'Not Available';
            };

            if (weInfo.weInfo.jobs.address  === undefined){
              weInfo.weInfo.jobs.address = {};
            };

                if (weInfo.weInfo.jobs.address.street_line1  === undefined){
                  weInfo.weInfo.jobs.address.street_line1 = '';
                };

                if (weInfo.weInfo.jobs.address.city  === undefined){
                  weInfo.weInfo.jobs.address.city = '';
                };

                if (weInfo.weInfo.jobs.address.state  === undefined){
                  weInfo.weInfo.jobs.address.state = {};
                };

                    if (weInfo.weInfo.jobs.address.state.text  === undefined){
                      weInfo.weInfo.jobs.address.state.text = '';
                    };

                    if (weInfo.weInfo.jobs.address.state.value  === undefined){
                      weInfo.weInfo.jobs.address.state.value = '';
                    };

                if (weInfo.weInfo.jobs.address.postal_code  === undefined){
                  weInfo.weInfo.jobs.address.postal_code = '';
                };

        if (weInfo.weInfo.locations  === undefined){
          weInfo.weInfo.locations = [];
        };

            if (weInfo.weInfo.locations.address  === undefined){
              weInfo.weInfo.locations.address = {};
            };

                if (weInfo.weInfo.locations.address.street_line1  === undefined){
                  weInfo.weInfo.locations.address.street_line1 = '';
                };

                if (weInfo.weInfo.locations.address.city  === undefined){
                  weInfo.weInfo.locations.address.city = '';
                };

                if (weInfo.weInfo.locations.address.state  === undefined){
                  weInfo.weInfo.locations.address.state = {};
                };

                    if (weInfo.weInfo.locations.address.state.text  === undefined){
                      weInfo.weInfo.locations.address.state.text = '';
                    };

                    if (weInfo.weInfo.locations.address.state.value  === undefined){
                      weInfo.weInfo.locations.address.state.value = '';
                    };

                if (weInfo.weInfo.locations.address.postal_code  === undefined){
                  weInfo.weInfo.locations.address.postal_code = '';
                };

        if (weInfo.weInfo.wealth  === undefined){
          weInfo.weInfo.wealth = {};
        };

            if (weInfo.weInfo.wealth.accredited_investor  === undefined){
              weInfo.weInfo.wealth.accredited_investor = false;
            };

            if (weInfo.weInfo.wealth.influence_rating  === undefined){
              weInfo.weInfo.wealth.influence_rating = {};
            };

                if (weInfo.weInfo.wealth.influence_rating.text  === undefined){
                  weInfo.weInfo.wealth.influence_rating.text = 'Not Available';
                };

                if (weInfo.weInfo.wealth.influence_rating.value  === undefined){
                  weInfo.weInfo.wealth.influence_rating.value = '';
                };

            if (weInfo.weInfo.wealth.networth  === undefined){
              weInfo.weInfo.wealth.networth = {};
            };

                if (weInfo.weInfo.wealth.networth.min  === undefined){
                  weInfo.weInfo.wealth.networth.min = 0;
                };

                if (weInfo.weInfo.wealth.networth.max  === undefined){
                  weInfo.weInfo.wealth.networth.max = 0;
                };

                if (weInfo.weInfo.wealth.networth.value  === undefined){
                  weInfo.weInfo.wealth.networth.value = 0;
                };

                if (weInfo.weInfo.wealth.networth.text_low  === undefined){
                  weInfo.weInfo.wealth.networth.text_low = '';
                };

                if (weInfo.weInfo.wealth.networth.text_high  === undefined){
                  weInfo.weInfo.wealth.networth.text_high = '';
                };

                if (weInfo.weInfo.wealth.networth.text  === undefined){
                  weInfo.weInfo.wealth.networth.text = 'Not Available';
                };

            if (weInfo.weInfo.wealth.total_income  === undefined){
              weInfo.weInfo.wealth.total_income = {};
            };

                if (weInfo.weInfo.wealth.total_income.min  === undefined){
                  weInfo.weInfo.wealth.total_income.min = 0;
                };

                if (weInfo.weInfo.wealth.total_income.max  === undefined){
                  weInfo.weInfo.wealth.total_income.max = 0;
                };

                if (weInfo.weInfo.wealth.total_income.value  === undefined){
                  weInfo.weInfo.wealth.total_income.value = 0;
                };

                if (weInfo.weInfo.wealth.total_income.text_low  === undefined){
                  weInfo.weInfo.wealth.total_income.text_low = '';
                };

                if (weInfo.weInfo.wealth.total_income.text_high  === undefined){
                  weInfo.weInfo.wealth.total_income.text_high = '';
                };

                if (weInfo.weInfo.wealth.total_income.text  === undefined){
                  weInfo.weInfo.wealth.total_income.text = 'Not Available';
                };

            if (weInfo.weInfo.wealth.business_ownership  === undefined){
              weInfo.weInfo.wealth.business_ownership = {};
            };

                if (weInfo.weInfo.wealth.business_ownership.min  === undefined){
                  weInfo.weInfo.wealth.business_ownership.min = 0;
                };

                if (weInfo.weInfo.wealth.business_ownership.max  === undefined){
                  weInfo.weInfo.wealth.business_ownership.max = 0;
                };

                if (weInfo.weInfo.wealth.business_ownership.value  === undefined){
                  weInfo.weInfo.wealth.business_ownership.value = 0;
                };

                if (weInfo.weInfo.wealth.business_ownership.text_low  === undefined){
                  weInfo.weInfo.wealth.business_ownership.text_low = '';
                };

                if (weInfo.weInfo.wealth.business_ownership.text_high  === undefined){
                  weInfo.weInfo.wealth.business_ownership.text_high = '';
                };

                if (weInfo.weInfo.wealth.business_ownership.text  === undefined){
                  weInfo.weInfo.wealth.business_ownership.text = 'Not Available';
                };

            if (weInfo.weInfo.wealth.business_sales_volume  === undefined){
              weInfo.weInfo.wealth.business_sales_volume = {};
            };

                if (weInfo.weInfo.wealth.business_sales_volume.min  === undefined){
                  weInfo.weInfo.wealth.business_sales_volume.min = 0;
                };

                if (weInfo.weInfo.wealth.business_sales_volume.max  === undefined){
                  weInfo.weInfo.wealth.business_sales_volume.max = 0;
                };

                if (weInfo.weInfo.wealth.business_sales_volume.value  === undefined){
                  weInfo.weInfo.wealth.business_sales_volume.value = 0;
                };

                if (weInfo.weInfo.wealth.business_sales_volume.text_low  === undefined){
                  weInfo.weInfo.wealth.business_sales_volume.text_low = '';
                };

                if (weInfo.weInfo.wealth.business_sales_volume.text_high  === undefined){
                  weInfo.weInfo.wealth.business_sales_volume.text_high = '';
                };

                if (weInfo.weInfo.wealth.business_sales_volume.text  === undefined){
                  weInfo.weInfo.wealth.business_sales_volume.text = 'Not Available';
                };

            if (weInfo.weInfo.wealth.cash_on_hand  === undefined){
              weInfo.weInfo.wealth.cash_on_hand = {};
            };

                if (weInfo.weInfo.wealth.cash_on_hand.min  === undefined){
                  weInfo.weInfo.wealth.cash_on_hand.min = 0;
                };

                if (weInfo.weInfo.wealth.cash_on_hand.max  === undefined){
                  weInfo.weInfo.wealth.cash_on_hand.max = 0;
                };

                if (weInfo.weInfo.wealth.cash_on_hand.value  === undefined){
                  weInfo.weInfo.wealth.cash_on_hand.value = 0;
                };

                if (weInfo.weInfo.wealth.cash_on_hand.text_low  === undefined){
                  weInfo.weInfo.wealth.cash_on_hand.text_low = '';
                };

                if (weInfo.weInfo.wealth.cash_on_hand.text_high  === undefined){
                  weInfo.weInfo.wealth.cash_on_hand.text_high = '';
                };

                if (weInfo.weInfo.wealth.cash_on_hand.text  === undefined){
                  weInfo.weInfo.wealth.cash_on_hand.text = 'Not Available';
                };

            if (weInfo.weInfo.wealth.investable_assets  === undefined){
              weInfo.weInfo.wealth.investable_assets = {};
            };

                if (weInfo.weInfo.wealth.investable_assets.min  === undefined){
                  weInfo.weInfo.wealth.investable_assets.min = 0;
                };

                if (weInfo.weInfo.wealth.investable_assets.max  === undefined){
                  weInfo.weInfo.wealth.investable_assets.max = 0;
                };

                if (weInfo.weInfo.wealth.investable_assets.value  === undefined){
                  weInfo.weInfo.wealth.investable_assets.value = 0;
                };

                if (weInfo.weInfo.wealth.investable_assets.text_low  === undefined){
                  weInfo.weInfo.wealth.investable_assets.text_low = '';
                };

                if (weInfo.weInfo.wealth.investable_assets.text_high  === undefined){
                  weInfo.weInfo.wealth.investable_assets.text_high = '';
                };

                if (weInfo.weInfo.wealth.investable_assets.text  === undefined){
                  weInfo.weInfo.wealth.investable_assets.text = 'Not Available';
                };

            if (weInfo.weInfo.wealth.total_assets  === undefined){
              weInfo.weInfo.wealth.total_assets = {};
            };

                if (weInfo.weInfo.wealth.total_assets.min  === undefined){
                  weInfo.weInfo.wealth.total_assets.min = 0;
                };

                if (weInfo.weInfo.wealth.total_assets.max  === undefined){
                  weInfo.weInfo.wealth.total_assets.max = 0;
                };

                if (weInfo.weInfo.wealth.total_assets.value  === undefined){
                  weInfo.weInfo.wealth.total_assets.value = 0;
                };

                if (weInfo.weInfo.wealth.total_assets.text_low  === undefined){
                  weInfo.weInfo.wealth.total_assets.text_low = '';
                };

                if (weInfo.weInfo.wealth.total_assets.text_high  === undefined){
                  weInfo.weInfo.wealth.total_assets.text_high = '';
                };

                if (weInfo.weInfo.wealth.total_assets.text  === undefined){
                  weInfo.weInfo.wealth.total_assets.text = 'Not Available';
                };

            if (weInfo.weInfo.wealth.total_stock  === undefined){
              weInfo.weInfo.wealth.total_stock = {};
            };

                if (weInfo.weInfo.wealth.total_stock.min  === undefined){
                  weInfo.weInfo.wealth.total_stock.min = 0;
                };

                if (weInfo.weInfo.wealth.total_stock.max  === undefined){
                  weInfo.weInfo.wealth.total_stock.max = 0;
                };

                if (weInfo.weInfo.wealth.total_stock.value  === undefined){
                  weInfo.weInfo.wealth.total_stock.value = 0;
                };

                if (weInfo.weInfo.wealth.total_stock.text_low  === undefined){
                  weInfo.weInfo.wealth.total_stock.text_low = '';
                };

                if (weInfo.weInfo.wealth.total_stock.text_high  === undefined){
                  weInfo.weInfo.wealth.total_stock.text_high = '';
                };

                if (weInfo.weInfo.wealth.total_stock.text  === undefined){
                  weInfo.weInfo.wealth.total_stock.text = 'Not Available';
                };

            if (weInfo.weInfo.wealth.stock_holdings_direct  === undefined){
              weInfo.weInfo.wealth.stock_holdings_direct = {};
            };

                if (weInfo.weInfo.wealth.stock_holdings_direct.min  === undefined){
                  weInfo.weInfo.wealth.stock_holdings_direct.min = 0;
                };

                if (weInfo.weInfo.wealth.stock_holdings_direct.max  === undefined){
                  weInfo.weInfo.wealth.stock_holdings_direct.max = 0;
                };

                if (weInfo.weInfo.wealth.stock_holdings_direct.value  === undefined){
                  weInfo.weInfo.wealth.stock_holdings_direct.value = 0;
                };

                if (weInfo.weInfo.wealth.stock_holdings_direct.text_low  === undefined){
                  weInfo.weInfo.wealth.stock_holdings_direct.text_low = '';
                };

                if (weInfo.weInfo.wealth.stock_holdings_direct.text_high  === undefined){
                  weInfo.weInfo.wealth.stock_holdings_direct.text_high = '';
                };

                if (weInfo.weInfo.wealth.stock_holdings_direct.text  === undefined){
                  weInfo.weInfo.wealth.stock_holdings_direct.text = 'Not Available';
                };

            if (weInfo.weInfo.wealth.stock_holdings_indirect  === undefined){
              weInfo.weInfo.wealth.stock_holdings_indirect = {};
            };

                if (weInfo.weInfo.wealth.stock_holdings_indirect.min  === undefined){
                  weInfo.weInfo.wealth.stock_holdings_indirect.min = 0;
                };

                if (weInfo.weInfo.wealth.stock_holdings_indirect.max  === undefined){
                  weInfo.weInfo.wealth.stock_holdings_indirect.max = 0;
                };

                if (weInfo.weInfo.wealth.stock_holdings_indirect.value  === undefined){
                  weInfo.weInfo.wealth.stock_holdings_indirect.value = 0;
                };

                if (weInfo.weInfo.wealth.stock_holdings_indirect.text_low  === undefined){
                  weInfo.weInfo.wealth.stock_holdings_indirect.text_low = '';
                };

                if (weInfo.weInfo.wealth.stock_holdings_indirect.text_high  === undefined){
                  weInfo.weInfo.wealth.stock_holdings_indirect.text_high = '';
                };

                if (weInfo.weInfo.wealth.stock_holdings_indirect.text  === undefined){
                  weInfo.weInfo.wealth.stock_holdings_indirect.text = 'Not Available';
                };

            if (weInfo.weInfo.wealth.total_pensions  === undefined){
              weInfo.weInfo.wealth.total_pensions = {};
            };

                if (weInfo.weInfo.wealth.total_pensions.min  === undefined){
                  weInfo.weInfo.wealth.total_pensions.min = 0;
                };

                if (weInfo.weInfo.wealth.total_pensions.max  === undefined){
                  weInfo.weInfo.wealth.total_pensions.max = 0;
                };

                if (weInfo.weInfo.wealth.total_pensions.value  === undefined){
                  weInfo.weInfo.wealth.total_pensions.value = 0;
                };

                if (weInfo.weInfo.wealth.total_pensions.text_low  === undefined){
                  weInfo.weInfo.wealth.total_pensions.text_low = '';
                };

                if (weInfo.weInfo.wealth.total_pensions.text_high  === undefined){
                  weInfo.weInfo.wealth.total_pensions.text_high = '';
                };

                if (weInfo.weInfo.wealth.total_pensions.text  === undefined){
                  weInfo.weInfo.wealth.total_pensions.text = 'Not Available';
                };

        if (weInfo.weInfo.demographics  === undefined){
          weInfo.weInfo.demographics = {};
        };

            if (weInfo.weInfo.demographics.has_children  === undefined){
              weInfo.weInfo.demographics.has_children = false;
            };

        if (weInfo.weInfo.vehicles  === undefined){
          weInfo.weInfo.vehicles = {};
        };

            if (weInfo.weInfo.vehicles.ownership  === undefined){
              weInfo.weInfo.vehicles.ownership = [];
            };

                if (weInfo.weInfo.vehicles.ownership.text  === undefined){
                  weInfo.weInfo.vehicles.ownership.text = 'Not Available';
                };

                if (weInfo.weInfo.vehicles.ownership.value  === undefined){
                  weInfo.weInfo.vehicles.ownership.value = '';
                };

        if (weInfo.weInfo.giving  === undefined){
          weInfo.weInfo.giving = {};
        };

            if (weInfo.weInfo.giving.affiliation_inclination  === undefined){
              weInfo.weInfo.giving.affiliation_inclination = {};
            };

                if (weInfo.weInfo.giving.affiliation_inclination.text  === undefined){
                  weInfo.weInfo.giving.affiliation_inclination.text = {};
                };

                if (weInfo.weInfo.giving.affiliation_inclination.value  === undefined){
                  weInfo.weInfo.giving.affiliation_inclination.value = {};
                };

            if (weInfo.weInfo.giving.planned_giving  === undefined){
              weInfo.weInfo.giving.planned_giving = [];
            };

                if (weInfo.weInfo.giving.planned_giving.text  === undefined){
                  weInfo.weInfo.giving.planned_giving.text = {};
                };

                if (weInfo.weInfo.giving.planned_giving.value  === undefined){
                  weInfo.weInfo.giving.planned_giving.value = {};
                };

            if (weInfo.weInfo.giving.charitable_donations  === undefined){
              weInfo.weInfo.giving.charitable_donations = {};
            };

                if (weInfo.weInfo.giving.charitable_donations.min  === undefined){
                  weInfo.weInfo.giving.charitable_donations.min = 0;
                };

                if (weInfo.weInfo.giving.charitable_donations.max  === undefined){
                  weInfo.weInfo.giving.charitable_donations.max = 0;
                };

                if (weInfo.weInfo.giving.charitable_donations.value  === undefined){
                  weInfo.weInfo.giving.charitable_donations.value = 0;
                };

                if (weInfo.weInfo.giving.charitable_donations.text_low  === undefined){
                  weInfo.weInfo.giving.charitable_donations.text_low = '';
                };

                if (weInfo.weInfo.giving.charitable_donations.text_high  === undefined){
                  weInfo.weInfo.giving.charitable_donations.text_high = '';
                };

                if (weInfo.weInfo.giving.charitable_donations.text  === undefined){
                  weInfo.weInfo.giving.charitable_donations.text = 'Not Available';
                };

            if (weInfo.weInfo.giving.total_political_donations  === undefined){
              weInfo.weInfo.giving.total_political_donations = {};
            };

                if (weInfo.weInfo.giving.total_political_donations.min  === undefined){
                  weInfo.weInfo.giving.total_political_donations.min = 0;
                };

                if (weInfo.weInfo.giving.total_political_donations.max  === undefined){
                  weInfo.weInfo.giving.total_political_donations.max = 0;
                };

                if (weInfo.weInfo.giving.total_political_donations.value  === undefined){
                  weInfo.weInfo.giving.total_political_donations.value = 0;
                };

                if (weInfo.weInfo.giving.total_political_donations.text_low  === undefined){
                  weInfo.weInfo.giving.total_political_donations.text_low = '';
                };

                if (weInfo.weInfo.giving.total_political_donations.text_high  === undefined){
                  weInfo.weInfo.giving.total_political_donations.text_high = '';
                };

                if (weInfo.weInfo.giving.total_political_donations.text  === undefined){
                  weInfo.weInfo.giving.total_political_donations.text = 'Not Available';
                };

            if (weInfo.weInfo.giving.total_donations  === undefined){
              weInfo.weInfo.giving.total_donations = {};
            };

                if (weInfo.weInfo.giving.total_donations.min  === undefined){
                  weInfo.weInfo.giving.total_donations.min = 0;
                };

                if (weInfo.weInfo.giving.total_donations.max  === undefined){
                  weInfo.weInfo.giving.total_donations.max = 0;
                };

                if (weInfo.weInfo.giving.total_donations.value  === undefined){
                  weInfo.weInfo.giving.total_donations.value = 0;
                };

                if (weInfo.weInfo.giving.total_donations.text_low  === undefined){
                  weInfo.weInfo.giving.total_donations.text_low = '';
                };

                if (weInfo.weInfo.giving.total_donations.text_high  === undefined){
                  weInfo.weInfo.giving.total_donations.text_high = '';
                };

                if (weInfo.weInfo.giving.total_donations.text  === undefined){
                  weInfo.weInfo.giving.total_donations.text = 'Not Available';
                };

            if (weInfo.weInfo.giving.estimated_annual_donations  === undefined){
              weInfo.weInfo.giving.estimated_annual_donations = {};
            };

                if (weInfo.weInfo.giving.estimated_annual_donations.min  === undefined){
                  weInfo.weInfo.giving.estimated_annual_donations.min = 0;
                };

                if (weInfo.weInfo.giving.estimated_annual_donations.max  === undefined){
                  weInfo.weInfo.giving.estimated_annual_donations.max = 0;
                };

                if (weInfo.weInfo.giving.estimated_annual_donations.value  === undefined){
                  weInfo.weInfo.giving.estimated_annual_donations.value = 0;
                };

                if (weInfo.weInfo.giving.estimated_annual_donations.text_low  === undefined){
                  weInfo.weInfo.giving.estimated_annual_donations.text_low = '';
                };

                if (weInfo.weInfo.giving.estimated_annual_donations.text_high  === undefined){
                  weInfo.weInfo.giving.estimated_annual_donations.text_high = '';
                };

                if (weInfo.weInfo.giving.estimated_annual_donations.text  === undefined){
                  weInfo.weInfo.giving.estimated_annual_donations.text = 'Not Available';
                };

            if (weInfo.weInfo.giving.gift_capacity  === undefined){
              weInfo.weInfo.giving.gift_capacity = {};
            };

                if (weInfo.weInfo.giving.gift_capacity.min  === undefined){
                  weInfo.weInfo.giving.gift_capacity.min = 0;
                };

                if (weInfo.weInfo.giving.gift_capacity.max  === undefined){
                  weInfo.weInfo.giving.gift_capacity.max = 0;
                };

                if (weInfo.weInfo.giving.gift_capacity.value  === undefined){
                  weInfo.weInfo.giving.gift_capacity.value = 0;
                };

                if (weInfo.weInfo.giving.gift_capacity.text_low  === undefined){
                  weInfo.weInfo.giving.gift_capacity.text_low = '';
                };

                if (weInfo.weInfo.giving.gift_capacity.text_high  === undefined){
                  weInfo.weInfo.giving.gift_capacity.text_high = '';
                };

                if (weInfo.weInfo.giving.gift_capacity.text  === undefined){
                  weInfo.weInfo.giving.gift_capacity.text = 'Not Available';
                };

            if (weInfo.weInfo.giving.p2g_score  === undefined){
              weInfo.weInfo.giving.p2g_score = {};
            };

                if (weInfo.weInfo.giving.p2g_score.text  === undefined){
                  weInfo.weInfo.giving.p2g_score.text = 'Not Available';
                };

                if (weInfo.weInfo.giving.p2g_score.value  === undefined){
                  weInfo.weInfo.giving.p2g_score.value = '';
                };

        if (weInfo.weInfo.professional === undefined){
          weInfo.weInfo.professional = {};
        };

            if (weInfo.weInfo.professional.board_member  === undefined){
              weInfo.weInfo.professional.board_member = false;
            };

    return response.status(201).json(weInfo);
  }

}

module.exports = GuestController;
