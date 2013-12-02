require 'spec_helper'

describe "configures/show" do
  before(:each) do
    @configure = assign(:configure, stub_model(Configure,
      :name => "Name",
      :content => "MyText"
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/Name/)
    rendered.should match(/MyText/)
  end
end
