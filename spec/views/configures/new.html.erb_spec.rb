require 'spec_helper'

describe "configures/new" do
  before(:each) do
    assign(:configure, stub_model(Configure,
      :name => "MyString",
      :content => "MyText"
    ).as_new_record)
  end

  it "renders new configure form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", configures_path, "post" do
      assert_select "input#configure_name[name=?]", "configure[name]"
      assert_select "textarea#configure_content[name=?]", "configure[content]"
    end
  end
end
