module ApplicationHelper

  # Returns the full html title per page
  def full_title(page_title)
    base_title = "MTD Dashboard"
    if page_title.empty?
      base_title
    else
      "#{base_title} | #{page_title}"
    end
  end
end
