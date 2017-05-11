$(document).ready(function () {
  const $plansForIndividual = $('.plan__individual');
  const $plansForCompany = $('.plan__company');

  $('.plan__btn-individual').on('click', function () {
    $(this).addClass('plan__btn-individual_active');
    $(this).closest('.plan__toggle-wrapper').removeClass('plan__toggle-wrapper_switched');
    $(this).siblings().removeClass('plan__btn-company_active');
    $plansForIndividual.addClass('plan__individual_active');
    $plansForCompany.removeClass('plan__company_active');
  });

  $('.plan__btn-company').on('click', function () {
    $(this).addClass('plan__btn-company_active');
    $(this).closest('.plan__toggle-wrapper').addClass('plan__toggle-wrapper_switched');
    $(this).siblings().removeClass('plan__btn-individual_active');
    $plansForCompany.addClass('plan__company_active');
    $plansForIndividual.removeClass('plan__individual_active');
  });
});
