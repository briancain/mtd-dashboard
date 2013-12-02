require 'spec_helper'

describe "configures/edit" do
  before(:each) do
    @configure = assign(:configure, stub_model(Configure,
      :name => "MyString",
      :content => "MyText"
    ))
  end

  it "renders the edit configure form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", configure_path(@configure), "post" do
      assert_select "input#configure_name[name=?]", "configure[name]"
      assert_select "textarea#configure_content[name=?]", "configure[content]"
    end
  end
end
