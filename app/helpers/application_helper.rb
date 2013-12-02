module ApplicationHelper

  # Returns the full html title per page
  def full_title(page_title)
    base_title = "ANCOR Dashboard"
    if page_title.empty?
      base_title
    else
      "#{base_title} | #{page_title}"
    end
  end

  # Tests to see if specified dropdown
  # group should be highlighted or not
  def highlight?(dropdown_group)
    if dropdown_group == 'home'
      ["/", "/dashboard/network"].any? do | route |
        current_page?(route)
      end
    elsif dropdown_group == 'manage'
      ["/dashboard/visualconfig", "/dashboard/manage", "/dashboard/instances"].any? do | route |
        current_page?(route)
      end
    elsif dropdown_group == 'admin'
      ["/admin/users", "/admin/settings"].any? do | route |
        current_page?(route)
      end
    elsif dropdown_group == 'configures'
      ["/configures", "/configures/new"].any? do | route |
        current_page?(route)
      end
    end
  end

  def admin?(user)
    ["brian", "admin"].include? user
  end
end
