function createWEObject(weInfo){

if (weInfo === undefined){
  weInfo = {};
};

    if (weInfo.relationship === undefined){
      weInfo.relationship = {};
    };

        if (weInfo.relationship.spouse  === undefined){
          weInfo.relationship.spouse = {};
        };

            if (weInfo.relationship.spouse.first_name  === undefined){
              weInfo.relationship.spouse.first_name = 'Not Available';
            };

            if (weInfo.relationship.spouse.full_name  === undefined){
              weInfo.relationship.spouse.full_name = 'Not Available';
            };

            if (weInfo.relationship.spouse.id  === undefined){
              weInfo.relationship.spouse.id = 0;
            };

            if (weInfo.relationship.spouse.last_name  === undefined){
              weInfo.relationship.spouse.last_name = 'Not Available';
            };

            if (weInfo.relationship.spouse.middle_name  === undefined){
              weInfo.relationship.spouse.middle_name = 'Not Available';
            };

    if (weInfo.id  === undefined){
      weInfo.id = 0;
    };

    if (weInfo.realestate  === undefined){
      weInfo.realestate = {};
    };

        if (weInfo.realestate.total_num_properties  === undefined){
          weInfo.realestate.total_num_properties = 'Not Available';
        };

        if (weInfo.realestate.total_realestate_value  === undefined){
          weInfo.realestate.total_realestate_value = {};
        };

            if (weInfo.realestate.total_realestate_value.min  === undefined){
              weInfo.realestate.total_realestate_value.min = 0;
            };

            if (weInfo.realestate.total_realestate_value.max  === undefined){
              weInfo.realestate.total_realestate_value.max = 0;
            };

            if (weInfo.realestate.total_realestate_value.value  === undefined){
              weInfo.realestate.total_realestate_value.value = 0;
            };

            if (weInfo.realestate.total_realestate_value.text_low  === undefined){
              weInfo.realestate.total_realestate_value.text_low = '';
            };

            if (weInfo.realestate.total_realestate_value.text_high  === undefined){
              weInfo.realestate.total_realestate_value.text_high = '';
            };

            if (weInfo.realestate.total_realestate_value.text  === undefined){
              weInfo.realestate.total_realestate_value.text = '';
            };

    if (weInfo.identity  === undefined){
      weInfo.identity = {};
    };

        if (weInfo.identity.first_name  === undefined){
          weInfo.identity.first_name = '';
        };

        if (weInfo.identity.middle_name  === undefined){
          weInfo.identity.middle_name = '';
        };

        if (weInfo.identity.last_name  === undefined){
          weInfo.identity.last_name = '';
        };

        if (weInfo.identity.full_name  === undefined){
          weInfo.identity.full_name = '';
        };

        if (weInfo.identity.age  === undefined){
          weInfo.identity.age = 0;
        };

        if (weInfo.identity.gender  === undefined){
          weInfo.identity.gender = {};
        };

            if (weInfo.identity.gender.text  === undefined){
              weInfo.identity.gender.text = '';
            };

            if (weInfo.identity.gender.value  === undefined){
              weInfo.identity.gender.value = '';
            };

        if (weInfo.identity.marital_status  === undefined){
          weInfo.identity.marital_status = {};
        };

            if (weInfo.identity.marital_status.text  === undefined){
              weInfo.identity.marital_status.text = '';
            };

            if (weInfo.identity.marital_status.value  === undefined){
              weInfo.identity.marital_status.value = '';
            };

        if (weInfo.identity.emails  === undefined){
          weInfo.identity.emails = [];
        };

            if (weInfo.identity.email  === undefined){
              weInfo.identity.email = '';
            };

    if (weInfo.jobs  === undefined){
      weInfo.jobs = [];
    };

        if (weInfo.jobs.org_name  === undefined){
          weInfo.jobs.org_name = '';
        };

        if (weInfo.jobs.org_type  === undefined){
          weInfo.jobs.org_type = {};
        };

            if (weInfo.jobs.org_type.text  === undefined){
              weInfo.jobs.org_type.text = '';
            };

            if (weInfo.jobs.org_type.value  === undefined){
              weInfo.jobs.org_type.value = '';
            };

        if (weInfo.jobs.title  === undefined){
          weInfo.jobs.title = '';
        };

        if (weInfo.jobs.phone  === undefined){
          weInfo.jobs.phone = '';
        };

        if (weInfo.jobs.email  === undefined){
          weInfo.jobs.email = '';
        };

        if (weInfo.jobs.address  === undefined){
          weInfo.jobs.address = {};
        };

            if (weInfo.jobs.address.street_line1  === undefined){
              weInfo.jobs.address.street_line1 = '';
            };

            if (weInfo.jobs.address.city  === undefined){
              weInfo.jobs.address.city = '';
            };

            if (weInfo.jobs.address.state  === undefined){
              weInfo.jobs.address.state = {};
            };

                if (weInfo.jobs.address.state.text  === undefined){
                  weInfo.jobs.address.state.text = '';
                };

                if (weInfo.jobs.address.state.value  === undefined){
                  weInfo.jobs.address.state.value = '';
                };

            if (weInfo.jobs.address.postal_code  === undefined){
              weInfo.jobs.address.postal_code = '';
            };

    if (weInfo.locations  === undefined){
      weInfo.locations = [];
    };

        if (weInfo.locations.address  === undefined){
          weInfo.locations.address = {};
        };

            if (weInfo.locations.address.street_line1  === undefined){
              weInfo.locations.address.street_line1 = '';
            };

            if (weInfo.locations.address.city  === undefined){
              weInfo.locations.address.city = '';
            };

            if (weInfo.locations.address.state  === undefined){
              weInfo.locations.address.state = {};
            };

                if (weInfo.locations.address.state.text  === undefined){
                  weInfo.locations.address.state.text = '';
                };

                if (weInfo.locations.address.state.value  === undefined){
                  weInfo.locations.address.state.value = '';
                };

            if (weInfo.locations.address.postal_code  === undefined){
              weInfo.locations.address.postal_code = '';
            };

    if (weInfo.wealth  === undefined){
      weInfo.wealth = {};
    };

        if (weInfo.wealth.accredited_investor  === undefined){
          weInfo.wealth.accredited_investor = false;
        };

        if (weInfo.wealth.influence_rating  === undefined){
          weInfo.wealth.influence_rating = {};
        };

            if (weInfo.wealth.influence_rating.text  === undefined){
              weInfo.wealth.influence_rating.text = '';
            };

            if (weInfo.wealth.influence_rating.value  === undefined){
              weInfo.wealth.influence_rating.value = '';
            };

        if (weInfo.wealth.networth  === undefined){
          weInfo.wealth.networth = {};
        };

            if (weInfo.wealth.networth.min  === undefined){
              weInfo.wealth.networth.min = 0;
            };

            if (weInfo.wealth.networth.max  === undefined){
              weInfo.wealth.networth.max = 0;
            };

            if (weInfo.wealth.networth.value  === undefined){
              weInfo.wealth.networth.value = 0;
            };

            if (weInfo.wealth.networth.text_low  === undefined){
              weInfo.wealth.networth.text_low = '';
            };

            if (weInfo.wealth.networth.text_high  === undefined){
              weInfo.wealth.networth.text_high = '';
            };

            if (weInfo.wealth.networth.text  === undefined){
              weInfo.wealth.networth.text = '';
            };

        if (weInfo.wealth.total_income  === undefined){
          weInfo.wealth.total_income = {};
        };

            if (weInfo.wealth.total_income.min  === undefined){
              weInfo.wealth.total_income.min = 0;
            };

            if (weInfo.wealth.total_income.max  === undefined){
              weInfo.wealth.total_income.max = 0;
            };

            if (weInfo.wealth.total_income.value  === undefined){
              weInfo.wealth.total_income.value = 0;
            };

            if (weInfo.wealth.total_income.text_low  === undefined){
              weInfo.wealth.total_income.text_low = '';
            };

            if (weInfo.wealth.total_income.text_high  === undefined){
              weInfo.wealth.total_income.text_high = '';
            };

            if (weInfo.wealth.total_income.text  === undefined){
              weInfo.wealth.total_income.text = '';
            };

        if (weInfo.wealth.business_ownership  === undefined){
          weInfo.wealth.business_ownership = {};
        };

            if (weInfo.wealth.business_ownership.min  === undefined){
              weInfo.wealth.business_ownership.min = 0;
            };

            if (weInfo.wealth.business_ownership.max  === undefined){
              weInfo.wealth.business_ownership.max = 0;
            };

            if (weInfo.wealth.business_ownership.value  === undefined){
              weInfo.wealth.business_ownership.value = 0;
            };

            if (weInfo.wealth.business_ownership.text_low  === undefined){
              weInfo.wealth.business_ownership.text_low = '';
            };

            if (weInfo.wealth.business_ownership.text_high  === undefined){
              weInfo.wealth.business_ownership.text_high = '';
            };

            if (weInfo.wealth.business_ownership.text  === undefined){
              weInfo.wealth.business_ownership.text = '';
            };

        if (weInfo.wealth.business_sales_volume  === undefined){
          weInfo.wealth.business_sales_volume = {};
        };

            if (weInfo.wealth.business_sales_volume.min  === undefined){
              weInfo.wealth.business_sales_volume.min = 0;
            };

            if (weInfo.wealth.business_sales_volume.max  === undefined){
              weInfo.wealth.business_sales_volume.max = 0;
            };

            if (weInfo.wealth.business_sales_volume.value  === undefined){
              weInfo.wealth.business_sales_volume.value = 0;
            };

            if (weInfo.wealth.business_sales_volume.text_low  === undefined){
              weInfo.wealth.business_sales_volume.text_low = '';
            };

            if (weInfo.wealth.business_sales_volume.text_high  === undefined){
              weInfo.wealth.business_sales_volume.text_high = '';
            };

            if (weInfo.wealth.business_sales_volume.text  === undefined){
              weInfo.wealth.business_sales_volume.text = '';
            };

        if (weInfo.wealth.cash_on_hand  === undefined){
          weInfo.wealth.cash_on_hand = {};
        };

            if (weInfo.wealth.cash_on_hand.min  === undefined){
              weInfo.wealth.cash_on_hand.min = 0;
            };

            if (weInfo.wealth.cash_on_hand.max  === undefined){
              weInfo.wealth.cash_on_hand.max = 0;
            };

            if (weInfo.wealth.cash_on_hand.value  === undefined){
              weInfo.wealth.cash_on_hand.value = 0;
            };

            if (weInfo.wealth.cash_on_hand.text_low  === undefined){
              weInfo.wealth.cash_on_hand.text_low = '';
            };

            if (weInfo.wealth.cash_on_hand.text_high  === undefined){
              weInfo.wealth.cash_on_hand.text_high = '';
            };

            if (weInfo.wealth.cash_on_hand.text  === undefined){
              weInfo.wealth.cash_on_hand.text = '';
            };

        if (weInfo.wealth.investable_assets  === undefined){
          weInfo.wealth.investable_assets = {};
        };

            if (weInfo.wealth.investable_assets.min  === undefined){
              weInfo.wealth.investable_assets.min = 0;
            };

            if (weInfo.wealth.investable_assets.max  === undefined){
              weInfo.wealth.investable_assets.max = 0;
            };

            if (weInfo.wealth.investable_assets.value  === undefined){
              weInfo.wealth.investable_assets.value = 0;
            };

            if (weInfo.wealth.investable_assets.text_low  === undefined){
              weInfo.wealth.investable_assets.text_low = '';
            };

            if (weInfo.wealth.investable_assets.text_high  === undefined){
              weInfo.wealth.investable_assets.text_high = '';
            };

            if (weInfo.wealth.investable_assets.text  === undefined){
              weInfo.wealth.investable_assets.text = '';
            };

        if (weInfo.wealth.total_assets  === undefined){
          weInfo.wealth.total_assets = {};
        };

            if (weInfo.wealth.total_assets.min  === undefined){
              weInfo.wealth.total_assets.min = 0;
            };

            if (weInfo.wealth.total_assets.max  === undefined){
              weInfo.wealth.total_assets.max = 0;
            };

            if (weInfo.wealth.total_assets.value  === undefined){
              weInfo.wealth.total_assets.value = 0;
            };

            if (weInfo.wealth.total_assets.text_low  === undefined){
              weInfo.wealth.total_assets.text_low = '';
            };

            if (weInfo.wealth.total_assets.text_high  === undefined){
              weInfo.wealth.total_assets.text_high = '';
            };

            if (weInfo.wealth.total_assets.text  === undefined){
              weInfo.wealth.total_assets.text = '';
            };

        if (weInfo.wealth.total_stock  === undefined){
          weInfo.wealth.total_stock = {};
        };

            if (weInfo.wealth.total_stock.min  === undefined){
              weInfo.wealth.total_stock.min = 0;
            };

            if (weInfo.wealth.total_stock.max  === undefined){
              weInfo.wealth.total_stock.max = 0;
            };

            if (weInfo.wealth.total_stock.value  === undefined){
              weInfo.wealth.total_stock.value = 0;
            };

            if (weInfo.wealth.total_stock.text_low  === undefined){
              weInfo.wealth.total_stock.text_low = '';
            };

            if (weInfo.wealth.total_stock.text_high  === undefined){
              weInfo.wealth.total_stock.text_high = '';
            };

            if (weInfo.wealth.total_stock.text  === undefined){
              weInfo.wealth.total_stock.text = '';
            };

        if (weInfo.wealth.stock_holdings_direct  === undefined){
          weInfo.wealth.stock_holdings_direct = {};
        };

            if (weInfo.wealth.stock_holdings_direct.min  === undefined){
              weInfo.wealth.stock_holdings_direct.min = 0;
            };

            if (weInfo.wealth.stock_holdings_direct.max  === undefined){
              weInfo.wealth.stock_holdings_direct.max = 0;
            };

            if (weInfo.wealth.stock_holdings_direct.value  === undefined){
              weInfo.wealth.stock_holdings_direct.value = 0;
            };

            if (weInfo.wealth.stock_holdings_direct.text_low  === undefined){
              weInfo.wealth.stock_holdings_direct.text_low = '';
            };

            if (weInfo.wealth.stock_holdings_direct.text_high  === undefined){
              weInfo.wealth.stock_holdings_direct.text_high = '';
            };

            if (weInfo.wealth.stock_holdings_direct.text  === undefined){
              weInfo.wealth.stock_holdings_direct.text = '';
            };

        if (weInfo.wealth.stock_holdings_indirect  === undefined){
          weInfo.wealth.stock_holdings_indirect = {};
        };

            if (weInfo.wealth.stock_holdings_indirect.min  === undefined){
              weInfo.wealth.stock_holdings_indirect.min = 0;
            };

            if (weInfo.wealth.stock_holdings_indirect.max  === undefined){
              weInfo.wealth.stock_holdings_indirect.max = 0;
            };

            if (weInfo.wealth.stock_holdings_indirect.value  === undefined){
              weInfo.wealth.stock_holdings_indirect.value = 0;
            };

            if (weInfo.wealth.stock_holdings_indirect.text_low  === undefined){
              weInfo.wealth.stock_holdings_indirect.text_low = '';
            };

            if (weInfo.wealth.stock_holdings_indirect.text_high  === undefined){
              weInfo.wealth.stock_holdings_indirect.text_high = '';
            };

            if (weInfo.wealth.stock_holdings_indirect.text  === undefined){
              weInfo.wealth.stock_holdings_indirect.text = '';
            };

        if (weInfo.wealth.total_pensions  === undefined){
          weInfo.wealth.total_pensions = {};
        };

            if (weInfo.wealth.total_pensions.min  === undefined){
              weInfo.wealth.total_pensions.min = 0;
            };

            if (weInfo.wealth.total_pensions.max  === undefined){
              weInfo.wealth.total_pensions.max = 0;
            };

            if (weInfo.wealth.total_pensions.value  === undefined){
              weInfo.wealth.total_pensions.value = 0;
            };

            if (weInfo.wealth.total_pensions.text_low  === undefined){
              weInfo.wealth.total_pensions.text_low = '';
            };

            if (weInfo.wealth.total_pensions.text_high  === undefined){
              weInfo.wealth.total_pensions.text_high = '';
            };

            if (weInfo.wealth.total_pensions.text  === undefined){
              weInfo.wealth.total_pensions.text = '';
            };

    if (weInfo.demographics  === undefined){
      weInfo.demographics = {};
    };

        if (weInfo.demographics.has_children  === undefined){
          weInfo.demographics.has_children = false;
        };

    if (weInfo.vehicles  === undefined){
      weInfo.vehicles = {};
    };

        if (weInfo.vehicles.ownership  === undefined){
          weInfo.vehicles.ownership = [];
        };

            if (weInfo.vehicles.ownership.text  === undefined){
              weInfo.vehicles.ownership.text = '';
            };

            if (weInfo.vehicles.ownership.value  === undefined){
              weInfo.vehicles.ownership.value = '';
            };

    if (weInfo.giving  === undefined){
      weInfo.giving = {};
    };

        if (weInfo.giving.affiliation_inclination  === undefined){
          weInfo.giving.affiliation_inclination = {};
        };

            if (weInfo.giving.affiliation_inclination.text  === undefined){
              weInfo.giving.affiliation_inclination.text = {};
            };

            if (weInfo.giving.affiliation_inclination.value  === undefined){
              weInfo.giving.affiliation_inclination.value = {};
            };

        if (weInfo.giving.planned_giving  === undefined){
          weInfo.giving.planned_giving = [];
        };

            if (weInfo.giving.planned_giving.text  === undefined){
              weInfo.giving.planned_giving.text = {};
            };

            if (weInfo.giving.planned_giving.value  === undefined){
              weInfo.giving.planned_giving.value = {};
            };

        if (weInfo.giving.charitable_donations  === undefined){
          weInfo.giving.charitable_donations = {};
        };

            if (weInfo.giving.charitable_donations.min  === undefined){
              weInfo.giving.charitable_donations.min = 0;
            };

            if (weInfo.giving.charitable_donations.max  === undefined){
              weInfo.giving.charitable_donations.max = 0;
            };

            if (weInfo.giving.charitable_donations.value  === undefined){
              weInfo.giving.charitable_donations.value = 0;
            };

            if (weInfo.giving.charitable_donations.text_low  === undefined){
              weInfo.giving.charitable_donations.text_low = '';
            };

            if (weInfo.giving.charitable_donations.text_high  === undefined){
              weInfo.giving.charitable_donations.text_high = '';
            };

            if (weInfo.giving.charitable_donations.text  === undefined){
              weInfo.giving.charitable_donations.text = '';
            };

        if (weInfo.giving.total_political_donations  === undefined){
          weInfo.giving.total_political_donations = {};
        };

            if (weInfo.giving.total_political_donations.min  === undefined){
              weInfo.giving.total_political_donations.min = 0;
            };

            if (weInfo.giving.total_political_donations.max  === undefined){
              weInfo.giving.total_political_donations.max = 0;
            };

            if (weInfo.giving.total_political_donations.value  === undefined){
              weInfo.giving.total_political_donations.value = 0;
            };

            if (weInfo.giving.total_political_donations.text_low  === undefined){
              weInfo.giving.total_political_donations.text_low = '';
            };

            if (weInfo.giving.total_political_donations.text_high  === undefined){
              weInfo.giving.total_political_donations.text_high = '';
            };

            if (weInfo.giving.total_political_donations.text  === undefined){
              weInfo.giving.total_political_donations.text = '';
            };

        if (weInfo.giving.total_donations  === undefined){
          weInfo.giving.total_donations = {};
        };

            if (weInfo.giving.total_donations.min  === undefined){
              weInfo.giving.total_donations.min = 0;
            };

            if (weInfo.giving.total_donations.max  === undefined){
              weInfo.giving.total_donations.max = 0;
            };

            if (weInfo.giving.total_donations.value  === undefined){
              weInfo.giving.total_donations.value = 0;
            };

            if (weInfo.giving.total_donations.text_low  === undefined){
              weInfo.giving.total_donations.text_low = '';
            };

            if (weInfo.giving.total_donations.text_high  === undefined){
              weInfo.giving.total_donations.text_high = '';
            };

            if (weInfo.giving.total_donations.text  === undefined){
              weInfo.giving.total_donations.text = '';
            };

        if (weInfo.giving.estimated_annual_donations  === undefined){
          weInfo.giving.estimated_annual_donations = {};
        };

            if (weInfo.giving.estimated_annual_donations.min  === undefined){
              weInfo.giving.estimated_annual_donations.min = 0;
            };

            if (weInfo.giving.estimated_annual_donations.max  === undefined){
              weInfo.giving.estimated_annual_donations.max = 0;
            };

            if (weInfo.giving.estimated_annual_donations.value  === undefined){
              weInfo.giving.estimated_annual_donations.value = 0;
            };

            if (weInfo.giving.estimated_annual_donations.text_low  === undefined){
              weInfo.giving.estimated_annual_donations.text_low = '';
            };

            if (weInfo.giving.estimated_annual_donations.text_high  === undefined){
              weInfo.giving.estimated_annual_donations.text_high = '';
            };

            if (weInfo.giving.estimated_annual_donations.text  === undefined){
              weInfo.giving.estimated_annual_donations.text = '';
            };

        if (weInfo.giving.gift_capacity  === undefined){
          weInfo.giving.gift_capacity = {};
        };

            if (weInfo.giving.gift_capacity.min  === undefined){
              weInfo.giving.gift_capacity.min = 0;
            };

            if (weInfo.giving.gift_capacity.max  === undefined){
              weInfo.giving.gift_capacity.max = 0;
            };

            if (weInfo.giving.gift_capacity.value  === undefined){
              weInfo.giving.gift_capacity.value = 0;
            };

            if (weInfo.giving.gift_capacity.text_low  === undefined){
              weInfo.giving.gift_capacity.text_low = '';
            };

            if (weInfo.giving.gift_capacity.text_high  === undefined){
              weInfo.giving.gift_capacity.text_high = '';
            };

            if (weInfo.giving.gift_capacity.text  === undefined){
              weInfo.giving.gift_capacity.text = '';
            };

        if (weInfo.giving.p2g_score  === undefined){
          weInfo.giving.p2g_score = {};
        };

            if (weInfo.giving.p2g_score.text  === undefined){
              weInfo.giving.p2g_score.text = '';
            };

            if (weInfo.giving.p2g_score.value  === undefined){
              weInfo.giving.p2g_score.value = '';
            };

    if (weInfo.professional === undefined  === undefined){
      weInfo.professional = {};
    };

        if (weInfo.professional.board_member  === undefined){
          weInfo.professional.board_member = false;
        };

};
